module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  reporters: ['default', 'jest-junit'],
  collectCoverage: true,
  coverageReporters: ['html', 'lcov', 'clover', 'cobertura', 'text', 'text-summary'],
};
