const tf = require("@tensorflow/tfjs");
require("@tensorflow/tfjs-node");

/*
*   Define a tf.sequential model
*   Add two fully connected layers
*   Remember when we use the softmax activation?
*   (Hint: Tensorflow calls these "Dense" layers)
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