// Use the tf.sequential.evaluate function, the test inputs and their labels to test the model
function test(model, { inputs, labels }) {
    return model.evaluate(inputs, labels, {
        batchSize: inputs.length
    });
}

module.exports = test;