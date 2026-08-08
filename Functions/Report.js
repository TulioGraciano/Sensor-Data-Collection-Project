
import asciichart from 'asciichart';
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
console.log("\n-------- TEMPERATURE CHART --------\n");
const temperaturas = readings.map(r => r.temperatura);
const HigherLimit = 80;
const LowerLimit = 10;
const Max = temperaturas.map(() => HigherLimit);
const Min = temperaturas.map(() => LowerLimit);

console.log(asciichart.plot(
    [temperaturas, Max, Min],
    {
        height: 10,
    }
));
    console.log("\n-------- PRESSURE CHART --------\n");
    const pressoes = readings.map(r => r.pressao);
    const HigherLimitPress = 1050;
    const LowerLimitPress = 980;
    const MaxPress = pressoes.map(() => HigherLimitPress);
    const MinPress = pressoes.map(() => LowerLimitPress);
    console.log(asciichart.plot(
        [pressoes, MaxPress, MinPress],
        {
            height: 10,
        }
    ));
}

