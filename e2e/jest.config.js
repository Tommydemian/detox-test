// /** @type {import('@jest/types').Config.InitialOptions} */
// module.exports = {
//   preset: 'ts-jest',
//   rootDir: '..',
//   testMatch: ['<rootDir>/e2e/**/*.test.js'],
//   testTimeout: 120000,
//   maxWorkers: 1,
//   globalSetup: 'detox/runners/jest/globalSetup',
//   globalTeardown: 'detox/runners/jest/globalTeardown',
//   reporters: ['detox/runners/jest/reporter'],
//   testEnvironment: 'detox/runners/jest/testEnvironment',
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
//   verbose: true,
// };
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'detox/runners/jest/testEnvironment',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '\\.e2e\\.ts',
};
