const { expect } = require('@jest/globals');
const request = require('supertest');
const app = require('../app');

describe("GET /api/flights/:originAirport/to/:destinationAirport", () => {
    test("200: returns route object with information about the route between the two supplied airports", async () => {
        const res = await request(app)
            .get('/api/flights/OSL/to/DME')
            .expect(200);
        expect(res.body.outboundFlight).toMatchObject({
            journey: expect.any(Array),
            miles: expect.any(Array),
            totalDistance: expect.any(Number),
            costPP: expect.any(Number)
        });
        expect(res.body.inboundFlight).toMatchObject({
          journey: expect.any(Array),
          miles: expect.any(Array),
          totalDistance: expect.any(Number),
          costPP: expect.any(Number),
        });
        
    });

})