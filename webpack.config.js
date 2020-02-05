const path = require('path');
module.exports = {
  mode: "production",
  entry: './src/client/index.tsx',
  devtool: "inline-source-map",

  resolve: {
      extensions: [".ts", ".tsx"]
  },

  module: {
      rules: [
          {
              test: /\.ts(x?)$/,
              exclude: /node_modules/,
              use: [
                  {
                      loader: "ts-loader"
                  }
              ]
          },

          {
              enforce: "pre",
              test: /\.js$/,
              loader: "source-map-loader"
          }
      ]
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  }
};