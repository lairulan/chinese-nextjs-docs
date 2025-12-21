const { register } = require("ts-node");

register({
  transpileOnly: true,
  compilerOptions: {
    module: "commonjs",
    target: "es2020",
    moduleResolution: "node",
    esModuleInterop: true,
  },
});

require("./generateOrderIndex.ts");
