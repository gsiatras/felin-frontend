const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Specify the root directory of your Next.js app
});

const customJestConfig = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Use babel-jest for JS/TS files
  },
  transformIgnorePatterns: [
    "/node_modules/(?!swiper)" // Transform the swiper module
  ],
  testEnvironment: 'jsdom', // Use jsdom for testing
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Setup file for additional configuration
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports
  },
};

module.exports = createJestConfig(customJestConfig);
