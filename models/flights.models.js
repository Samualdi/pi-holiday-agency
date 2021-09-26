const axios = require('axios');
const app = require('../app');

exports.fetchShortestRoute = async (originAirport, destinationAirport) => {
    const outboundFlight = await axios(`https://7302htasp6.execute-api.eu-west-1.amazonaws.com/v1/airport/${originAirport}/to/${destinationAirport}`);
    outboundFlight.data.totalDistance = outboundFlight.data.miles.reduce((a, b) => a + b, 0)
    outboundFlight.data.costPP = outboundFlight.data.totalDistance * 0.1;

    const inboundFlight = await axios(`https://7302htasp6.execute-api.eu-west-1.amazonaws.com/v1/airport/${destinationAirport}/to/${originAirport}`);
    inboundFlight.data.totalDistance = inboundFlight.data.miles.reduce((a, b) => a + b, 0)
    inboundFlight.data.costPP = inboundFlight.data.totalDistance * 0.1;

    return {
        outboundFlight: outboundFlight.data,
        inboundFlight: inboundFlight.data
    };
  
}
