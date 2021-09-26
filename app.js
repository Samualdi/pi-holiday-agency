const express = require('express');
const { getShortestRoute } = require('./controllers/flights.controllers')



const app = express();

app.use(express.json());



app.get('/api/flights/:originAirport/to/:destinationAirport', getShortestRoute);



module.exports = app;