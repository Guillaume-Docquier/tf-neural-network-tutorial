const mnist = require("mnist");

// Make a training and a test dataset using mnist
// Inspect the data to see what it looks like
// Respect the return format
function getData() {
    const { training, test } = mnist.set(5000, 1000);
    console.log(training[0]);
    console.log(training[0].input.length);
    console.log(training[0].output.length);
    console.log(test[0]);
    console.log(test[0].input.length);
    console.log(test[0].output.length);

    return { training, test };
}

module.exports = getData;