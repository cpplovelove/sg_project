import express from 'express';
import PurposeController from './purpose-controller.js';
import UserController from './user-controller.js';

const Router = express.Router();

//User Controller
Router.get('/users', UserController.getUsers);
Router.get('/logout', UserController.logout);
Router.post('/user/join', UserController.join);
Router.post('/user/login', UserController.login);
Router.post('/user/approve', UserController.approve);

//Purpose Controller
Router.get('/purposes', PurposeController.getPurposes);
Router.get('/purposes/:userId', PurposeController.getPurposesById);
Router.get('/purposes/page/:page', PurposeController.getPurposesByPage);
Router.post('/purpose/create', PurposeController.createPurpose);

export default Router;
