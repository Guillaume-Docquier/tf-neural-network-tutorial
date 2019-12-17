const tf = require("@tensorflow/tfjs");
require("@tensorflow/tfjs-node");

/*
*   TensorflowJs models require tensors as inputs
*   Take the data you extracted in exercise 1 and convert it to tensors that fit
*   the input and output shapes you specified in exercise 2
*   https://js.tensorflow.org/api/latest/#tensor2d
*/
function convertDataToTensors({ training, test }) {
    const trainTensors = {
        inputs: tf.tensor2d(training.map(datum => datum.input)),
        labels: tf.tensor2d(training.map(datum => datum.output))
    };

    const testTensors = {
        inputs: tf.tensor2d(test.map(datum => datum.input)),
        labels: tf.tensor2d(test.map(datum => datum.output))
    };

    return { trainTensors, testTensors };
}

module.exports = convertDataToTensors;