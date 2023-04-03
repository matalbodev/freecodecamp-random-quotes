import type { Config } from "jest";

const config: Config = {
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
	moduleNameMapper: {
		"\\.(gif|ttf|eot|svg|png)$": "<rootDir>/__mocks__/fileMock.js",
		"\\.(css|less|sass|scss)$": "identity-obj-proxy",
	},
};

export default config;
