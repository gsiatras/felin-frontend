module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // Handle CSS imports (sass, less, etc.)
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    // Handle image imports
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Specify the setup file
  transform: {
    // Use babel-jest to transpile tests
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], // Ignore Next.js build directory
};
