const tf = require("@tensorflow/tfjs");
require("@tensorflow/tfjs-node");

// Define a tf.sequential model
// Add a hidden and an output layer
// Define the optimizer, loss and metrics
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