"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
exports.default = (0, test_1.defineConfig)({
    testDir: 'tests',
    timeout: 30 * 1000,
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 10 * 1000,
        ignoreHTTPSErrors: true,
    },
    projects: [
        { name: 'chromium', use: { ...test_1.devices['Desktop Chrome'] } },
        { name: 'firefox', use: { ...test_1.devices['Desktop Firefox'] } },
        { name: 'webkit', use: { ...test_1.devices['Desktop Safari'] } },
    ],
});
