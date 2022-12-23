import express from 'express';
import UserController from './user-controller.js';

const Router = express.Router();

//User Controller
Router.post('/user/join', UserController.join);
Router.post('/user/login', UserController.login);
Router.post('/user/approve', UserController.approve);

export default Router;
