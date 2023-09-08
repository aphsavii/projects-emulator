const express = require('express');
const cors = require('cors');
const functions = require('firebase-functions');

const app = express();

const sampleController = require('./sample-controller');
app.use('/hello', sampleController);


module.exports = {
  sample: functions.https.onRequest(app)
};
