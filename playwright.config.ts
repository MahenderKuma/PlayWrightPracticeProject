import { defineConfig, devices } from '@playwright/test';
import { ConfigManager } from './src/config/configManager';

export default defineConfig({
  testDir: './tests',
  timeout: ConfigManager.getTimeout(),
  use: {
    baseURL: ConfigManager.getBaseurl(),
    headless: ConfigManager.isHeadless(),
    viewport: { width: ConfigManager.getViewportWidth(), height: ConfigManager.getViewportHeight() },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    ignoreHTTPSErrors: true,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],


});
