const webpack = require('webpack');
const path = require('path');

// Build directory is where the bundle file will be placed
const BUILD_DIR = path.resolve(__dirname, 'client/dist');
// App directory is where all of your raw JSX files will be placed
const APP_DIR = path.resolve(__dirname, 'client/src');

const config = {
  entry: APP_DIR + '/index.jsx',
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: APP_DIR,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                "targets": "defaults"
              }],
              '@babel/preset-react'
            ]
          }
        }]
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;