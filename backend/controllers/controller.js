//express router to route our local weather endpoints
const express = require('express');
const wx = express.Router();
const Weather = require('./weather');

// wx.get('/weather', async (req, res) => {
//     let weather = new Weather();
//     let weatherData = await weather.getWxData(99504, 'us');
//     res.header('Content-Type', 'application/json');
//     res.send(JSON.stringify(weatherData, null, 4));
// });
// //Get request dynamically 
// wx.post('/weather', async (req, res) => {
//     const {zipCode, tempMetric} = req.body;
//     let weather = new Weather();
//     let weatherData = await weather.getWxData(zipCode, tempMetric);
//     res.header('Content-Type', 'application/json');
//     res.send(JSON.stringify(weatherData, null, 4));
// });

//get weather data from api save to db then return data back
wx.post('/wxmongo', async (req, res) => {
    const {zipCode, tempMetric} = req.body;
    let weather = new Weather();
    let weatherData = await weather.getWxData(zipCode, tempMetric);
    await weather.saveWxData(zipCode, weatherData);
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(weatherData, null, 4));
});
//Get saved data from db 
wx.get('/wxmongo', async (req, res) => {
    const {zipCode} = req.query;
    let weather = new Weather();
    let weatherData = await weather.getWxDataMongo(zipCode);
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(weatherData, null, 4));
});

module.exports = wx;