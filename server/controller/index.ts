import express from 'express';
import UserController from './user-controller.js';

const Router = express.Router();

//User Controller
Router.get('*', UserController.base);

export default Router;
