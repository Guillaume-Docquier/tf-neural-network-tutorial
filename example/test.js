const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

const mnist = require("mnist");
const { model } = require("./config");
const { shuffle, argmax, consoleFormat, MNIST_IMAGE_SIZE } = require("./src");

const testData = mnist.set(0, 10000).test;
const shuffledTestData = shuffle(testData);
const randomTestData = shuffledTestData.slice(0, 10);

main();
async function main() {
    const network = await tf.loadLayersModel("file://./mnist.tfm/model.json");

    const inputTensor = model.convertDataToTensors(randomTestData).input;
    const predictionTensor = network.predict(inputTensor);
    const predictions = tf.argMax(predictionTensor, 1).dataSync();
    for (let i = 0; i < randomTestData.length; i++) {
        const label = argmax(randomTestData[i].output);
        const prediction = predictions[i];

        console.group("\nImage:");
        printImage(randomTestData[i].input);

        let color = consoleFormat.fgGreen;
        if (label !== prediction) {
            color = consoleFormat.fgRed;
        }

        console.log(color, "Label:", label);
        console.log(color, "Prediction:", prediction);
        console.groupEnd();
    }
}

function printImage(pixels) {
    for (let i = 0; i < MNIST_IMAGE_SIZE; i++) {
        let row = "";
        for (let j = 0; j < MNIST_IMAGE_SIZE; j++) {
            row += pixels[i * MNIST_IMAGE_SIZE + j] ? "X" : " ";
        }
        console.log(row);
    }
}