const path = require("path");
const webpack = require("webpack");

let localCanisters, prodCanisters, canisters;
console.log("--- Starting custom-webpack.config.js");
function initCanisterIds() {
  
  try {
    localCanisters = require(path.resolve(".dfx", "local", "canister_ids.json"));
  } catch (error) {
    console.log("No local canister_ids.json found. Continuing production");
  }

  try {
    prodCanisters = require(path.resolve("canister_ids.json"));
  } catch (error) {
    console.log("No production canister_ids.json found. Continuing with local");
  }

  const network =
    process.env.DFX_NETWORK ||
    (process.env.NODE_ENV === "production" ? "ic" : "local");

  console.log("network = ",network );

  canisters = network === "local" ? localCanisters : prodCanisters;

  for (const canister in canisters) {
    process.env[canister.toUpperCase() + "_CANISTER_ID"] =
      canisters[canister][network];
  }
}
initCanisterIds();

const isDevelopment = process.env.NODE_ENV !== "production";


module.exports = {
  node: { global: true}, // Fix: "Uncaught ReferenceError: global is not defined".
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      MOTOKO_CANISTER_ID: canisters["motoko"]
    }),
    new webpack.ProvidePlugin({
      Buffer: [require.resolve("buffer/"), "Buffer"],
      process: require.resolve("process/browser"),
    }),
  ],
  // proxy /api to port 8000 during development
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api",
        },
      },
    },
    hot: true,
    //contentBase: path.resolve(__dirname, "./src/motoko_assets"),
    //watchContentBase: true
  },
};
