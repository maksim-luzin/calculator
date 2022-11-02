const path = require("path");
const { defineConfig } = require("@vue/cli-service");
const dotenv = require("dotenv");

dotenv.config({
  path: path.resolve(__dirname, ".env"),
  devServer: {
    proxy: process.env.VUE_APP_SERVER_URL,
  },
});

module.exports = defineConfig({
  transpileDependencies: true,
});
