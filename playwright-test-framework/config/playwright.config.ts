import { defineConfig, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = defineConfig({
  timeout: 60000,
  reporter: [['html', { open: 'always' }]],  // 'never', 'on-failure', or 'always'
  use: {
    headless: false, 
    screenshot: 'on',
  },
  projects: [
    {
      name: 'chrome',  // Change the project name to 'chrome'
      use: {
        browserName: 'chromium',
        channel: 'chrome',  // Use the Chrome browser instead of default Chromium
      },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],
  outputDir: './reports',
});

export default config;
