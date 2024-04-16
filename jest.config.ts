export default {
    preset: 'ts-jest',
    // transform: {
    //     '^.+\\.(ts|tsx)?$': 'ts-jest',
    //     '^.+\\.(js|jsx)$': 'babel-jest',
    // },
    // transform: {
    //     '^.+\\.(ts|tsx)$': ['ts-jest', { 'tsconfig': 'tsconfig.json' }],
    //     // '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    // },
    // clearMocks: true,
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "babel-jest"
    },
    // transformIgnorePatterns: [
    //     "node_modules/(?!variables/.*)"
    // ],
    // transformIgnorePatterns: [
    //     "node_modules/(?!useLocalStorageState/.*)"
    // ],
    // preset: 'ts-jest',
    // transform: {
    //   '^.+\\.(ts|tsx)?$': 'ts-jest',
    //   '^.+\\.(js|jsx)$': 'babel-jest',
    // },
    // transform: { '^.+\\.(ts|tsx)$': 'ts-jest' },
    testEnvironment: "jsdom",
    // preset: 'ts-jest',
    // transform: { '^.+\\.ts?$': 'ts-jest' },
    clearMocks: true,
    verbose: true,
    bail: 1,
    transformIgnorePatterns: [
        "node_modules/(?!(useLocalStorageState)/)"
    ],
    transform: {
        '\\.[jt]sx?$': 'esbuild-jest',
    },
};