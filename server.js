import app from './src/app.js';
import tmp from 'tmp';
import AuthController from "./src/controllers/authController.js";


const PORT = 3000;

app.listen(PORT, () => {
    console.log("Servidor escutando!");
    console.log("Iniciando conexão com spotify");
    connectSpotify();
});

function connectSpotify() {
}


