// frontend/jest.config.js
export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {}, // Important: Babel nahi chahiye jab type: module hai
  extensionsToTreatAsEsm: ['.jsx'],
  testMatch: [
    '<rootDir>/test/**/*.test.js',
    '<rootDir>/test/**/*.test.jsx'
  ],
};