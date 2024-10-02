This README.md provides a comprehensive guide for setting up and using the playwright-test-framework using VS Code.

Prerequisites:- Make sure the necessary tools are installed:

1.Node.js and npm: 2.After installation, verify it by running: node -v npm -v 3.I used Visual Studio Code: Download and install VS Code (if you don't already have it) 4.TypeScript(if you don't already have it): npm install -g typescript 5.Install Playwright using npm: 6.Run the following command to initialize a Node.js project: npm init -y 7.Install Playwright as a dependency: npm install @playwright/test 8.Install TypeScript as a development dependency: npm install typescript --save-dev

Steps to get this repo and running the tests are:

Clone the repository from github.com
To Run the test : Use Playwright's CLI - npx playwright test
To Run the test in headed mode : Run - npx playwright test >>test file path --headed Example: npx playwright test tests/checkout.spec.ts --headed
To Generate Report : Run - npx playwright show-report
