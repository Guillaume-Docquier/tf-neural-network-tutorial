const tf = require("@tensorflow/tfjs");
require("@tensorflow/tfjs-node");

// Define a tf.sequential model
// Add a hidden and an output layer
// Compile the model with the chosen optimizer, loss and metrics
function buildModel() {
    const model = tf.sequential();

    model.compile();

    return model;
}

module.exports = buildModel;