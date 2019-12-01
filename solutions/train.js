const mnist = require("mnist");
const { model, trainBatchSize, trainEpochs, trainShuffle, trainValidationSplit } = require("./config");

main();
async function main() {
    const data = mnist.set(5000, 1000);
    const network = model.build();
    const fitResult = await train(network, data.training);
    const evalResult = test(network, data.test);

    printMetrics(fitResult, evalResult);
    network.save("file://./mnist.tfm");
}

async function train(network, data) {
    const trainTensors = model.convertDataToTensors(data);
    return await network.fit(trainTensors.input, trainTensors.output, {
        batchSize: trainBatchSize,
        epochs: trainEpochs,
        shuffle: trainShuffle,
        validationSplit: trainValidationSplit
    });
}

function test(network, data) {
    const testTensors = model.convertDataToTensors(data);
    return network.evaluate(testTensors.input, testTensors.output, {
        batchSize: data.length
    });
}

function printMetrics(fitResult, evalResult) {
    const accuracyMetricIndex = fitResult.params.metrics.indexOf("acc");
    const accuracy = evalResult[accuracyMetricIndex].dataSync();
    console.log(`Test accuracy: ${(accuracy * 100).toFixed(2)}%`);
}