const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const plugins = [];

if (process.env.ANALYZE === 'true') {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  target: 'node',
  entry: './src/index.ts',
  output: {
    filename: 'lambda.js',
    // path: path.join(__dirname, "dist"),
    library: 'library',
    libraryTarget: 'umd',
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      // {
      //     test: /\.(js|jsx)$/,
      //     exclude: /node_modules/,
      //     use: ["babel-loader"],
      // },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
    ],
  },
  plugins,
};
