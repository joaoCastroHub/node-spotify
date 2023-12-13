import * as dotenv from 'dotenv';
dotenv.config();

import { v4 as uuidv4 } from 'uuid'; 'uuid';
import axios from 'axios';
import querystring from 'querystring';

var stateKey = 'spotify_auth_state';
var client_id = process.env.client_id;
var client_secret = process.env.client_secret;
var redirect_uri = process.env.REDIRECTURI;
var state = uuidv4();

class AuthController {
    static async getToken(req, res) {
        res.cookie(stateKey, state);
        // your application requests authorization
        var scope = 'user-read-private user-read-email';
        res.redirect('https://accounts.spotify.com/authorize?' +
            querystring.stringify({
                response_type: 'code',
                client_id: client_id,
                scope: scope,
                redirect_uri: redirect_uri,
                state: state
            }));
    }

    static async callback(req, res) {
        var code = req.query.code || null;
        var state = req.query.state || null;
        var storedState = req.cookies ? req.cookies[stateKey] : null;
        
        if (state === null || state !== storedState) {
            res.redirect('/#' +
                querystring.stringify({
                    error: 'state_mismatch'
                }));
        } else {
            res.clearCookie(stateKey);

            axios.post('https://accounts.spotify.com/api/token', {
                code: code,
                redirect_uri: redirect_uri,
                grant_type: 'authorization_code',
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
                }
            }).then(response => {
                res.status(200).send(response.data);
            }).catch(function (error) {
                console.log('deu ruim');
                res.status(500).send(error.data);
            });
        }

    }
};

export default AuthController;