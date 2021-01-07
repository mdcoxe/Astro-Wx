require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3009;
const MONGOURI = process.env.MONGODB_URI;
const cors = require('cors');


//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Use routes from the controllers folder
const controller = require('./controllers/controller');
app.use('/api', controller);
// const weather = require('./controllers/weather');
// app.use('/weather', weather);


//Database connection
mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});
mongoose.connection.on('error', (err) => {
    console.log(err.message);
});
mongoose.connection.on('disconnected', () => {
    console.log('HEY, you\'re disconnected from MongoDB');
});
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

app.listen(PORT, () => {
    console.log('I can hear you on', PORT);
})
module.exports = app;