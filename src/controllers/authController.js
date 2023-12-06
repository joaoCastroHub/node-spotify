import axios from 'axios';

class AuthController {
    static async getToken(req, res) {
        var data = {
            grant_type: 'client_credentials',
            client_id: '',
            client_secret: ''
        }

        axios.post('https://accounts.spotify.com/api/token', data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(response => {
            res.send(response.data);
        });
    }
};

export default AuthController;