module.exports = {
  testTimeout: 20000,
  testEnvironment: "node",
//   setupFiles: ["./tests/loadTestEnv.js"],
  setupFilesAfterEnv: ["<rootDir>/tests/setup.js"],
};
