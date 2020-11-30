const preprocessor = require("@cypress/vue/dist/plugins/webpack");
module.exports = (on, config) => {
  require("@cypress/code-coverage/task")(on, config);

  preprocessor(on, config);
  // IMPORTANT return the config object
  return config;
};
