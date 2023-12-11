import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

class AuthController {
    static async getToken(req, res) {
        var data = {
            grant_type: 'client_credentials',
            client_id: process.client_id,
            client_secret: process.client_secret
        }

        axios.post('https://accounts.spotify.com/api/token', data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(response => {
            res.status(200).send(response);
        }).catch(function (error) {
            res.status(500).send(error.data);
        });
    }
};

export default AuthController;