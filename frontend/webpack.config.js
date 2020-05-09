const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const BundleTracker = require('webpack-bundle-tracker');

module.exports = (env = {}) => {
  return {

    mode: env.prod ? 'production' : 'development',
    devtool: env.prod ? 'source-map' : 'cheap-module-eval-source-map',
    entry: path.resolve(__dirname, './src/main.ts'),
    output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: "http://0.0.0.0:8080/"
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
          }
        },
      ]
    },
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json'],
      alias: {
        'vue': '@vue/runtime-dom'
      }
    },
    plugins: [
      new VueLoaderPlugin(),
      new BundleTracker({filename: './webpack-stats.json'})
    ],
    devServer: {
      headers: {
        "Access-Control-Allow-Origin":"\*"
      },
      public: 'http://0.0.0.0:8080',
      inline: true,
      hot: true,
      stats: "minimal",
      contentBase: __dirname,
      overlay: true
    }
  };
}