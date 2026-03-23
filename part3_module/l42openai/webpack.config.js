const path = require('path');

module.exports = {
  entry:{
     app:'./src-client/app.ts',
     appimg:'./src-client/appimg.ts',
   

  },
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
    filename:'[name].js', //eg. app.js, authcheck.js...
    path: path.resolve(__dirname, 'public/static'), // change to public
  },
  
    devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },

};