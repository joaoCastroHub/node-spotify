import express from 'express';
import auth from './authRoutes.js';

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Spotify API in user"));
    app.use(express.json(), auth);
}

export default routes;