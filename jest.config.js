export default {
 testEnvironment: 'node',
 collectCoverage: true,
 coverageDirectory: 'coverage',
 coverageReporters: ['text', 'lcov'],
 collectCoverageFrom: ['src/**/*.js'],
 coverageThreshold: {
 global: { branches: 80, functions: 80, lines: 80, statements: 80 },
 },
};

