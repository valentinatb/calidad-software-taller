// jest.config.mjs
export default {
  testEnvironment: "node",
  transform: {}, // sin babel ni ts-jest
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js"],
};
