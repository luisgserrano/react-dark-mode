var path = require('path');

module.exports = {
  entry: './src/Provider.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'react-use-dark-mode.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  externals: {
    react: 'commonjs react',
  },
};
