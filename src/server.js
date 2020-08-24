const express = require('express');
const  mongoose = require('mongoose');
const app = express();
const  cors = require('cors');
const PORT = process.env.PORT || 8000 ;
const userController = require('./controllers/UserController');

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

try {
    mongoose.connect(process.env.MONGO_DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } )
    console.log('mongo db donnected ');
} catch (e) {
    console.log(e);
}
app.use(cors());
app.use(express.json());


app.get('/', (req, res ) => {
   res.send('Hello from Express1');
});
app.post('/register', userController.store);

app.listen(PORT, () =>{
    console.log(`Listening on ${PORT}`);
});
