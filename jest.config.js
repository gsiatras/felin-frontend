module.exports = {
    testEnvironment: 'jsdom', // Use jsdom for testing React components
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Specify setup file for additional configurations
    moduleNameMapper: {
      // Handle CSS imports
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
  };
  