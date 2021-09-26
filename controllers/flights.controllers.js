const app = require('../app');
const { fetchShortestRoute } = require('../models/flights.models');

exports.getShortestRoute = async (req, res, next) => {
    try {
        const { originAirport, destinationAirport } = req.params;
        const flights = await fetchShortestRoute(originAirport, destinationAirport);
        res.status(200).send(flights);
        console.log(flights);
    } catch (err) {
        console.log(err)
        next(err);
    }
}