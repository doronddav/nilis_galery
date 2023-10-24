// const path = require("path");

// // module.exports = {
// //   resolve: {
// //     fallback: {
// //       path: require.resolve("./node_modules/path-browserify"),
// //       os: require.resolve("./node_modules/os-browserify/browser"),
// //       crypto: require.resolve("./node_modules/crypto-browserify"),

// //       // existing fallbacks
// //       fs: false,
// //       tls: false,
// //       net: false,
// //       zlib: false,
// //       http: false,
// //       https: false,
// //       stream: false,
// //     },
// //   },
// // };

// module.exports = function override(config, env) {
//   console.log("override");
//   let loaders = config.resolve;
//   loaders.fallback = {
//     fs: false,
//     tls: false,
//     net: false,
//     http: require.resolve("stream-http"),
//     https: false,
//     zlib: require.resolve("browserify-zlib"),
//     path: require.resolve("path-browserify"),
//     stream: require.resolve("stream-browserify"),
//     util: require.resolve("util/"),
//     crypto: require.resolve("crypto-browserify"),
//   };

//   return config;
// };
