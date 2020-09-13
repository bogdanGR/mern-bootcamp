const express = require('express');
const multer = require('multer');



const userController = require('./controllers/UserController');
const eventController = require('./controllers/EventController');
const dashboardController = require('./controllers/DashboardController');
const loginController = require('./controllers/LoginController');
const registrationController = require('./controllers/RegistrationController');
const approvalController = require('./controllers/ApprovalController');
const rejectionController = require('./controllers/RejectionController');
const  uploadConfig  = require('./config/upload');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/status', (req, res ) => {
    res.send({status: 200});
});

// TODO SubscribeController
// TODO RegistrationApprovalController
// TODO RegistrationRejectionController


//Registration
routes.post('/registration/:eventId', registrationController.create);
routes.get('/registration/:registration_id', registrationController.getRegistration);
routes.post('/registration/:registration_id/approvals', approvalController.approval)
routes.post('/registration/:registration_id/rejections', rejectionController.rejection)


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
