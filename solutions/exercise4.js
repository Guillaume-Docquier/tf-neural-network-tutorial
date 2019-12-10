// Use the tf.sequential.fit function, the training inputs and their labels to train the model
async function train(model, { inputs, labels }) {
    return await model.fit(inputs, labels, {
        batchSize: 64,
        epochs: 10,
        shuffle: true,
        validationSplit: 0.15
    });
}

module.exports = train;