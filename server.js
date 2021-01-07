const express = require('express');
const app = require('./api/app');
app.use(express.static('build'));