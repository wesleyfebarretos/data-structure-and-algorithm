import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Handles transforming TypeScript files
  },
  testMatch: ['**/?(*.)+(spec|test).ts'], // Match any file ending in `.test.ts` or `.spec.ts`
};

export default config;
