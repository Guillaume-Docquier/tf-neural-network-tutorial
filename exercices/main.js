const getData = require("./exercise1");
const buildModel = require("./exercise2");
const convertDataToTensors = require("./exercise3");
const train = require("./exercise4");
const test = require("./exercise5");

main();
async function main() {
    const data = getData();
    const model = buildModel();
    const { trainTensors, testTensors } = convertDataToTensors(data);
    const fitResult = await train(model, trainTensors);
    const testResult = test(model, testTensors);
    
    printMetrics(fitResult, testResult);
    // TODO Visualize
}

function printMetrics(fitResult, evalResult) {
    const accuracyMetricIndex = fitResult.params.metrics.indexOf("acc");
    const accuracy = evalResult[accuracyMetricIndex].dataSync();
    console.log(`\nTest accuracy: ${(accuracy * 100).toFixed(2)}%`);
}