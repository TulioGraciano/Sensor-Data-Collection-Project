function DataGenerator(){
    const now = new Date().toDateString();
    const temperature = +(10 + Math.random() * 70).toFixed(1);
    const pressure = +(1005 + Math.random() * 50).toFixed(1);
    const sensor_ID = Math.floor(Math.random() * 2) + 1;

    return {
        timestamp: now,
        temperature: temperature,
        pressure: pressure,
        sensor_ID: sensor_ID
    };
}
