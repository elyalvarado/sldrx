import { DefinePlugin } from 'webpack';
require('dotenv').config()

const { FIREBASE_API_KEY, FIREBASE_DB_URL } = process.env

export default (config, env, helpers) => {
  delete config.entry.polyfills;
  config.output.filename = "[name].js";

  config.plugins.push(
    new DefinePlugin({
      'process.env.FIREBASE_API_KEY': JSON.stringify(FIREBASE_API_KEY),
      'process.env.FIREBASE_DB_URL': JSON.stringify(FIREBASE_DB_URL)
    })
  );

  let { plugin } = helpers.getPluginsByName(config, "ExtractTextPlugin")[0];
  plugin.options.disable = true;

  if (env.production) {
    config.output.libraryTarget = "umd";
    let { plugin } = helpers.getPluginsByName(config, "UglifyJsPlugin")[0];
    plugin.options.sourceMap = false
  }
};
