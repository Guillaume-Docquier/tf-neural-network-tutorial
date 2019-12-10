const tf = require("@tensorflow/tfjs");
require("@tensorflow/tfjs-node");

// TensorflowJs models require tensors as inputs
// Take the data you extracted in exercise 1 and convert it to tensors that fit
// the input and output shapes you specified in exercise 2
function convertDataToTensors({ training, test }) {
    const trainTensors = {
        inputs: undefined,
        labels: undefined
    };

    const testTensors = {
        inputs: undefined,
        labels: undefined
    };

    return { trainTensors, testTensors };
}

module.exports = convertDataToTensors;