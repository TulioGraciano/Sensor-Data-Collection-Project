# Sensor Data Collection Project
A learning project focused on implementing sensor data acquisition, processing, and displaying sensor readings.

## 🎯 Objective
Simulates the collection of readings from a temperature and pressure sensor, processes that data by classifying it by severity, and generates a visual report in the terminal — including ASCII charts of the variation of each measurement.

## ✨ Features
- 📥 Asynchronous reading of a `.json` file simulating sensor readings
- 🔍 Automatic classification of each reading as **Normal**, **Alert**, or **Critical**, based on configurable temperature and pressure thresholds
- 📝 Detailed terminal report, with overall counts and the exact time/value of each out-of-range reading
- 📈 Temperature and pressure charts rendered directly in the terminal, using [asciichart](https://www.npmjs.com/package/asciichart)

## 🖥️ Sample output
\`\`\`
-------- READINGS REPORT --------
Total Readings: 12
Alert Readings: 1
Normal Readings: 11
Critical Readings: 0

-------- TEMPERATURE ALERTS --------
 ⚠️ Temperature Alerts:
- Temperature: 7.2, Timestamp: 2026-08-08T19:00:00

-------- TEMPERATURE CHART --------

   27.10 ┤    ╭╮
   25.11 ┤   ╭╯╰─╮
   23.12 ┤  ╭╯   │
   21.13 ┤ ╭╯    ╰╮
   19.14 ┤╭╯      ╰╮
   17.15 ┼╯        ╰╮
   15.16 ┤          │
   13.17 ┤          │
   11.18 ┤          │
    9.19 ┤          │
    7.20 ┤          ╰

-------- PRESSURE CHART --------

 1016.70 ┤          ╭
 1016.05 ┤         ╭╯
 1015.40 ┼╮        │
 1014.75 ┤╰╮      ╭╯
 1014.10 ┤ ╰╮     │
 1013.45 ┤  │    ╭╯
 1012.80 ┤  ╰╮   │
 1012.15 ┤   │  ╭╯
 1011.50 ┤   ╰╮ │
 1010.85 ┤    │╭╯
 1010.20 ┤    ╰╯
\`\`\`