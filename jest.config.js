const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Specify the root directory of your Next.js app
});

const customJestConfig = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Add your setup file here if needed
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports
  },
};

module.exports = createJestConfig(customJestConfig);