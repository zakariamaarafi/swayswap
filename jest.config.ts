import type { Config } from '@jest/types';

export const config: Config.InitialOptions = {
  preset: 'ts-jest/presets/default-esm',
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/**/?(*.)+(spec|test).[jt]s?(x)'],
  reporters: ['default', 'github-actions'],
  setupFilesAfterEnv: ['@fuels-ui/test-utils/setup.ts'],
  collectCoverageFrom: [
    '<rootDir>/**/*.{js,ts,tsx}',
    '!**/*test.{js,ts,tsx}',
    '!**/test-*.{js,ts}',
  ],
  moduleNameMapper: {
    '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
    '~/(.*)$': '<rootDir>/src/$1',
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};

export default config;
