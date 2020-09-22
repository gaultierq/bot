const tsConfig = require('./tsconfig.json');
const tsConfigPaths = require('tsconfig-paths');

// this can be usefull to replace the package relative url in /build gen .js

const baseUrl = './build'; // Either absolute or relative path. If relative it's resolved to current working directory.
tsConfigPaths.register({
  baseUrl,
  paths: tsConfig.compilerOptions.paths
});
