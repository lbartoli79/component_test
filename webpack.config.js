const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.jsx',
  externals: [
    'react',
    'react-dom',
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'example.js',
    library: {
        name: 'Example',
        type: 'umd'
    },
  },
};