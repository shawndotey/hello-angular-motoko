const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

let localCanisters, prodCanisters, canisters;

try {
  localCanisters = require(path.resolve(".dfx", "local", "canister_ids.json"));
} catch (error) {
  console.log("No local canister_ids.json found. Continuing production");
}
function initCanisterIds() {
  try {
    prodCanisters = require(path.resolve("canister_ids.json"));
  } catch (error) {
    console.log("No production canister_ids.json found. Continuing with local");
  }

  const network =
    process.env.DFX_NETWORK ||
    (process.env.NODE_ENV === "production" ? "ic" : "local");

  canisters = network === "local" ? localCanisters : prodCanisters;

  for (const canister in canisters) {
    process.env[canister.toUpperCase() + "_CANISTER_ID"] =
      canisters[canister][network];
  }
}
initCanisterIds();

const isDevelopment = process.env.NODE_ENV !== "production";
const asset_entry = path.join(
  "src",
  "hello_assets",
  "src",
  "other.html"
);

module.exports = {
 
  plugins: [
    new webpack.DefinePlugin({
      'STABLE_FEATURE': JSON.stringify(true),
      'EXPERIMENTAL_FEATURE': JSON.stringify(false)
    }),
    // new HtmlWebpackPlugin({
    //   template: path.join(__dirname, asset_entry),
    //   cache: false
    // }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.join(__dirname, "src", "hello_assets", "assets"),
    //       to: path.join(__dirname, "dist", "hello_assets"),
    //     },
    //   ],
    // }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      HELLO_CANISTER_ID: canisters["hello"]
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
    contentBase: path.resolve(__dirname, "./src/hello_assets"),
    watchContentBase: true
  },
};
