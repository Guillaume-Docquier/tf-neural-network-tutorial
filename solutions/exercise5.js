/*
*   Use the tf.sequential.evaluate function, the test inputs and their labels to test the model
*   Return the result of tf.sequential.evaluate
*   https://js.tensorflow.org/api/latest/#tf.Sequential.evaluate
*/
function test(model, { inputs, labels }) {
    return model.evaluate(inputs, labels, {
        batchSize: inputs.length
    });
}

module.exports = test;