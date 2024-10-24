// jest.config.js
module.exports = {
  preset: 'next/babel', // Use Next.js preset
  testEnvironment: 'jsdom', // Use jsdom environment
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Specify setup file
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Use babel-jest for transforming files
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports
  },
};
