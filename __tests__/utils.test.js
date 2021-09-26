const { findCheapestTransfer } = require("../utils/find-cheapest-transfer");

describe('findCheapestTransfer', () => {
    test('returns 0 when passed a distance of 0', () => {
        const distance = 0;
        const passengers = 2;
        const actual = findCheapestTransfer(passengers, distance);
        const expected = 0;

        expect(actual).toBe(expected);
    });

    test('returns the cheapest mode of transport and its cost whe passed a valid distance and a passenger value of less than 4 (a single car)', () => {
        let distance = 100;
        let passengers = 3;
        let actual = findCheapestTransfer(passengers, distance);
        let expected = 'Car -> 23 GBP';

        expect(actual).toBe(expected);

        distance = 20;
        passengers = 4;
        actual = findCheapestTransfer(passengers, distance);
        expected = 'Taxi -> 7 GBP'
    });

    test('returns the cheapest mode of transport and its cost when passed a number of passengers requiring multiple cars', () => {
        let distance = 100;
        let passengers = 5;
        let actual = findCheapestTransfer(passengers, distance);
        let expected = "Car -> 46 GBP";

        expect(actual).toBe(expected);

        distance = 20;
        passengers = 15;
        actual = findCheapestTransfer(passengers, distance);
        expected = "Taxi -> 21 GBP";
    });
    
});