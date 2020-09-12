const express = require('express');
const multer = require('multer');



const userController = require('./controllers/UserController');
const eventController = require('./controllers/EventController');
const dashboardController = require('./controllers/DashboardController');
const loginController = require('./controllers/LoginController');
const  uploadConfig  = require('./config/upload');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/status', (req, res ) => {
    res.send({status: 200});
});

// TODO SubscribeController
// TODO ApprovalController
// TODO RejectionController


// Login
routes.post('/login', loginController.store);

//Dashboard
routes.get('/dashboard/:sport', dashboardController.getAllEvent);
routes.get('/dashboard', dashboardController.getAllEvent);
routes.get('/event/:eventId', dashboardController.getEventById);

//Events
routes.post('/event', upload.single("thumbnail"), eventController.createEvent);
routes.delete('/event/:eventId', eventController.delete);

//User
routes.post('/user/register', userController.createUser);
routes.get('/user/:userId', userController.getUserById);

module.exports = routes;
