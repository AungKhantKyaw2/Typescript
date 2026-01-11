const path = require('path');

module.exports = {
  entry: './src/app.ts',
   mode: 'development',  //development or production , add this line from (https://webpack.js.org/ > Documentation  > Configuration >Mode >Usage >)
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },  {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // change to public
  },
  
    devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },

};