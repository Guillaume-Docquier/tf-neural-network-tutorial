const tf = require("@tensorflow/tfjs");
require("@tensorflow/tfjs-node");

const { MNIST_IMAGE_SIZE, MNIST_NB_CLASSES } = require("./constants");

function build() {
    const model = tf.sequential();

    // Convolutions
    model.add(tf.layers.conv2d({ inputShape: [1, MNIST_IMAGE_SIZE, MNIST_IMAGE_SIZE], dataFormat: "channelsFirst", filters: 32, kernelSize: 3, activation: "relu" }));
    model.add(tf.layers.maxPooling2d({ poolSize: 2 }));
    model.add(tf.layers.conv2d({ filters: 64, kernelSize: 3, activation: "relu" }));
    model.add(tf.layers.maxPooling2d({ poolSize: 2 }));
    model.add(tf.layers.conv2d({ filters: 128, kernelSize: 3, activation: "relu" }));

    // Classification
    model.add(tf.layers.flatten());
    model.add(tf.layers.dense({ units: 32, activation: "relu" }));
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
        input: tf.tensor4d(data.map(datum => [toSquareMatrix(datum.input)])),
        output: tf.tensor2d(data.map(datum => datum.output))
    };
}

function toSquareMatrix(data1DArray) {
    const clonedData = [...data1DArray];
    const matrix = [];
    while(clonedData.length > 0) {
        matrix.push(clonedData.splice(0, MNIST_IMAGE_SIZE));
    }

    return matrix;
}

module.exports = {
    build,
    convertDataToTensors
}