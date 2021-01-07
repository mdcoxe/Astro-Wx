require('dotenv').config({path: '../.env'});
const axios = require('axios');
const WxData = require('../models/weather');

const base = 'http://api.openweathermap.org/data/2.5/weather?zip=';

class Weather {
    getWxData = async (zipCode, tempMetric) => {
        let url = `${base}${zipCode},us&units=imperial&appid=${process.env.WEATHER_KEY}`;
        return (await axios(url)).data; 
    }
    //Saves the weather data using zipcode as unique id, if it already exists, replaces old data.
    saveWxData = async (zipCode, data) => {
        const filter = {
            zip: zipCode
        }
        const replace = {
            ...filter,
            ...data,
            data: Date.now()
        }
        await this.findOneAndReplace(filter, replace);
    }
    getWxDataMongo = async (zipCode) => {
        return WxData.findOne({ zip: zipCode });
    }
    async findOneAndReplace(filter, replace) {
        await WxData.findOneAndReplace(filter, replace, { new: true, upsert: true })
    }
};

module.exports = Weather;