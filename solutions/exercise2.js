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
    model.add(tf.layers.dense({ inputShape: [28 * 28], units: 300, activation: "relu" }));
    model.add(tf.layers.dense({ units: 10, activation: "softmax" }));
    
    model.compile({
        optimizer: "adam",
        loss: "categoricalCrossentropy",
        metrics: ["accuracy"]
    });

    return model;
}

module.exports = buildModel;