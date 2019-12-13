const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

const mnist = require("mnist");
const convertDataToTensors = require("./exercise3");

const data = mnist.set(10, 10000);
data.test = shuffle(data.test).slice(0, 10);

main();
async function main() {
    const { testTensors } = convertDataToTensors(data);

    const model = await tf.loadLayersModel("file://./mnist.tfm/model.json");

    const predictionTensor = model.predict(testTensors.inputs);
    const predictions = tf.argMax(predictionTensor, 1).dataSync();
    const labels = tf.argMax(testTensors.labels, 1).dataSync();
    for (let i = 0; i < data.test.length; i++) {
        const label = labels[i];
        const prediction = predictions[i];

        console.group("\nImage:");
        printImage(data.test[i].input);

        let color = consoleFormat.fgGreen;
        if (label !== prediction) {
            color = consoleFormat.fgRed;
        }

        console.log(color, "Label:", label);
        console.log(color, "Prediction:", prediction);
        console.groupEnd();
    }
}

const MNIST_IMAGE_SIZE = 28;
function printImage(pixels) {
    for (let i = 0; i < MNIST_IMAGE_SIZE; i++) {
        let row = "";
        for (let j = 0; j < MNIST_IMAGE_SIZE; j++) {
            row += pixels[i * MNIST_IMAGE_SIZE + j] ? "X" : " ";
        }
        console.log(row);
    }
}

// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
function shuffle(array) {
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }

    return array;
}

function argmax(array) {
    return array
        .map((value, index) => ({ value, index }))
        .reduce((max, current) => current.value > max.value ? current : max)
        .index;
}

const consoleFormat = {
    fgRed: "\x1b[31m",
    fgGreen: "\x1b[32m"
}