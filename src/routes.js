const express = require('express');
const multer = require('multer');



const userController = require('./controllers/UserController');
const eventController = require('./controllers/EventController');
const  uploadConfig  = require('./config/upload');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/status', (req, res ) => {
    res.send({status: 200});
});

//Event
routes.get('/event/:eventId', eventController.getEventById);
routes.post('/event', upload.single("thumbnail"), eventController.createEvent);


//User
routes.post('/user/register', userController.createUser);
routes.get('/user/:userId', userController.getUserById);

module.exports = routes;
