const webpack = require("webpack");
// Initialize dotenv library
require("dotenv").config();

module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };
    /**
     * Returns environment variables as an object
     */
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    /** Allows creation of global constants which can be configured
     * at compile time, (i.e. - environment variables)
     */
    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  }
};
