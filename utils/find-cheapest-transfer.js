exports.findCheapestTransfer = (passengers = 1, distance) => {
    if (distance === 0) return 0;
    let numberOfVechiles = Math.ceil(passengers / 4);
    const costOfCar = (3 + (0.2 * distance)) * numberOfVechiles;
    const costOfTaxi = (0.4 * distance) * numberOfVechiles;

    if (costOfCar > costOfTaxi) {
        return `Taxi -> ${costOfTaxi} GBP`;
    } else {
        return `Car -> ${costOfCar} GBP`;
    }
}


