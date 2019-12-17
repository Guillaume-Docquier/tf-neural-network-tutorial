/*
*   Use the tf.sequential.fit function, the training inputs and their labels to train the model
*   https://js.tensorflow.org/api/latest/#tf.Sequential.fit
*   Return the result of tf.sequential.fit
*/
async function train(model, { inputs, labels }) {
    return await model.fit(inputs, labels, {
        batchSize: 64,
        epochs: 10,
        shuffle: true,
        validationSplit: 0.15
    });
}

module.exports = train;