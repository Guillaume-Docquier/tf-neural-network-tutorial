const tf = require("@tensorflow/tfjs");
require("@tensorflow/tfjs-node");

const mnist = require("mnist");

const { MNIST_PIXEL_COUNT, MNIST_NB_CLASSES } = require("./constants");

const HIDDEN_LAYER_UNITS = 300;

const { training, test } = mnist.set(5000, 1000);

const model = tf.sequential();
model.add(tf.layers.dense({ inputShape: [MNIST_PIXEL_COUNT], units: HIDDEN_LAYER_UNITS, activation: "relu" }));
model.add(tf.layers.dense({ units: MNIST_NB_CLASSES, activation: "softmax" }));

model.compile({
    optimizer: "adam",
    loss: "categoricalCrossentropy",
    metrics: ["accuracy"]
});

main();
async function main() {
    const trainInput = tf.tensor2d(training.map(data => data.input));
    const trainOutput = tf.tensor2d(training.map(data => data.output));
    const fitResult = await model.fit(trainInput, trainOutput, {
        batchSize: 64,
        epochs: 10,
        shuffle: true,
        validationSplit: 0.15
    });

    const testInput = tf.tensor2d(test.map(data => data.input));
    const testOutput = tf.tensor2d(test.map(data => data.output));
    const evalResult = model.evaluate(testInput, testOutput, {
        batchSize: test.length
    });
    
    const accuracyMetricIndex = fitResult.params.metrics.indexOf("acc");
    const accuracy = await evalResult[accuracyMetricIndex].data();
    console.log(`Test accuracy: ${(accuracy * 100).toFixed(2)}%`);

    model.save("file://./mnist.tfm");
}