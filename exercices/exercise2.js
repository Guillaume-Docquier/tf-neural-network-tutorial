const tf = require("@tensorflow/tfjs");
require("@tensorflow/tfjs-node");

/*
*   Define a tf.sequential model
*   Add a hidden and an output layer
*   https://js.tensorflow.org/api/latest/#tf.Sequential.add
*/
function buildModel() {
    const model = tf.sequential();

    model.compile({
        optimizer: "adam",
        loss: "categoricalCrossentropy",
        metrics: ["accuracy"]
    });

    return model;
}

module.exports = buildModel;