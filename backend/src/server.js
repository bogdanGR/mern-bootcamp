const express = require('express');
const  mongoose = require('mongoose');
const app = express();
const  cors = require('cors');
const routes = require('./routes');
const path = require("path");
const PORT = process.env.PORT || 8000;

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
app.use(express.json())
app.use("/files", express.static(path.resolve(__dirname,  "..", "files")));
app.use(routes);

app.listen(PORT, () =>{
    console.log(`Listening on ${PORT}`);
});
