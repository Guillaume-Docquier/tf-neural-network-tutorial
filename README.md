# tf-neural-network-tutorial
Welcome to this neural network tutorial using tensorflow and mnist!  
This tutorial is aimed at machine learning and javascript beginners!  

## Before you start
You will need to install NodeJS and npm to complete the exercises.  
NodeJS and npm are usually bundled together.  
You can download NodeJS from their [official website](https://nodejs.org/en/) or install it through [chocolatey](https://chocolatey.org/packages/nodejs).  
``choco install nodejs``

Once all of this is done, run ``npm install``  
Note: Sometimes, tensorflow doesn't install properly. You'll get errors when trying to import it.  
To fix this, you can run ``npm run fix-tf-install-unix`` or ``npm run fix-tf-install-windows``, depending on the type of terminal you are using (do you use ``ls`` or ``dir`` ?).  

## The project
After completing this project, you will have built and trained a Tensorflow neural network to predict the number drawn in an image.  
While the exercises are quite simple, they lay the ground works for any machine learning technique using neural networks.  
I encourage you to play with the code after you've completed the exercises. Try different models or even change the dataset!  

This project is divided into 3 parts:
- exercises
- solutions
- example

The exercises are divided in 5 parts. Each part represents a step in the training loop of a neural network. They go as follow:
- exercise 1: Get the training and test data  
- exercise 2: Build your neural network  
- exercise 3: Transform the data so that it can be input into the neural network  
- exercise 4: Train your model with the training data  
- exercise 5: Evaluate your model with the test data  

Once you have completed the code, run ``main.js``! If you did it right, you should see the training start.  
You can expect the training to take less than a minute an achieve over 90% accuracy.  
You can then run ``test.js`` to see what your network predicted for 10 images.  

The solutions follows the same files/folders structure as the exercises, but with all the code completed.  

The example folder contains roughly the same code as the exercices, but organized in a more realistic fashion.  
It contains two model topologies you can play with: A multilayer perceptron (MLP) and a Convolutional Neural Network (CNN).  
Look at the config.js file and try running train.js and test.js!  

## Huh, how do I run a node.js script ?
In a terminal, use the ``node path/to/my/file.js`` command.   