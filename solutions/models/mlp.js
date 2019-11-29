const tf = require("@tensorflow/tfjs");
require("@tensorflow/tfjs-node");

const { MNIST_PIXEL_COUNT, MNIST_NB_CLASSES } = require("./constants");

const HIDDEN_LAYER_UNITS = 300;

function build() {
    const model = tf.sequential();
    model.add(tf.layers.dense({ inputShape: [MNIST_PIXEL_COUNT], units: HIDDEN_LAYER_UNITS, activation: "relu" }));
    model.add(tf.layers.dense({ units: MNIST_NB_CLASSES, activation: "softmax" }));
    
    model.compile({
        optimizer: "adam",
        loss: "categoricalCrossentropy",
        metrics: ["accuracy"]
    });

    return model;
}

function convertDataToTensors(data) {
    return {
        input: tf.tensor2d(data.map(datum => datum.input)),
        output: tf.tensor2d(data.map(datum => datum.output))
    };
}

module.exports = {
    build,
    convertDataToTensors
}