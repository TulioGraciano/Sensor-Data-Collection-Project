
export function Report(readings, result){
    console.log("-------- READINGS REPORT --------");
    console.log(`Total Readings: ${result.Total}`);
    console.log(`Alert Readings: ${result.geral.alert}`);
    console.log(`Normal Readings: ${result.geral.normal}`);
    console.log(`Critical Readings: ${result.geral.critical}`);
    console.log("-------- TEMPERATURE ALERTS --------");

    if(result.porTipo.tempAlert.length > 0){
        console.log("\n ⚠️Temperature Alerts:");
        result.porTipo.tempAlert.forEach(alert => {
            console.log(`- Temperature: ${alert.Temperature}, Timestamp: ${alert.Timestamp}`);
        });
    }
    if(result.porTipo.tempCritical.length > 0){
        console.log("\n ❗Temperature Critical Alerts:");
        result.porTipo.tempCritical.forEach(alert => {
            console.log(`- Temperature: ${alert.Temperature}, Timestamp: ${alert.Timestamp}`);
        });
    }
    console.log("-------- PRESSURE ALERTS --------");

    if(result.porTipo.pressAlert.length > 0){
        console.log("\n ⚠️Pressure Alerts:");
        result.porTipo.pressAlert.forEach(alert => {
            console.log(`- Pressure: ${alert.Pressure}, Timestamp: ${alert.Timestamp}`);
        });
    }
    if(result.porTipo.pressCritical.length > 0){
        console.log("\n ❗Pressure Critical Alerts:");
        result.porTipo.pressCritical.forEach(alert => {
            console.log(`- Pressure: ${alert.Pressure}, Timestamp: ${alert.Timestamp}`);
        });
    }
}