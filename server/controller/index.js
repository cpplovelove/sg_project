import express from 'express';
import UserController from '../controller/user-controller.js';

const Router = express.Router();

//User Controller
Router.get('*', UserController.base);

export default Router;
