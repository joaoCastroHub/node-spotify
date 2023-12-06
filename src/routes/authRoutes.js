import express from "express";
import AuthController from "../controllers/authController.js";

const routes = express.Router();

routes.get('/token', AuthController.getToken);

export default routes;