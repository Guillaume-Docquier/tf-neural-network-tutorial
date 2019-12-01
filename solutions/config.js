const { mlp, cnn } = require("./models");

// Try changing the model you use
const model = cnn;

// Try changing these hyperparameters
const trainBatchSize = 64;
const trainEpochs = 10;
const trainShuffle = true;
const trainValidationSplit = 0.15;

module.exports = {
    model,
    trainBatchSize,
    trainEpochs,
    trainShuffle,
    trainValidationSplit
}