const { Schema, model } = require('mongoose');

const astroWxSchema = Schema({
    title: {type: String, required: true},
    start: {type: Date, default: '01/01/2021'},
    peak:{type: Date, default: '01/01/2021'},
    end: {type: Date, default: '01/01/2021'},
    description: {type: String, required: true},
    tags: [{type: String}]
});

module.exports = model('AstroWx', astroWxSchema);