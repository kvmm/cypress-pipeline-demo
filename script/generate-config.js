const fs = require('fs');
const path = require('path');

// Fetch the sample file
const config = fs.readFileSync(path.join(__dirname, '../cypress.json'), { encoding: "utf8" });

// Adding the username and password from the variable group
const configJson = JSON.parse(config);
console.log(`Config: ${configJson}`)
configJson.env = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  clientid: process.env.CLIENTID,
  clientsecret: process.env.CLIENTSECRET
};

// Rename the junit file based on the browser used
configJson.reporterOptions.mochaFile = 'cypress/reports/junit.${process.env.BROWSER || "unknown"}-[hash].xml';

// Check if there is a project ID specified
if (process.env.CYPRESS_PROJECT_ID) {
  configJson.projectId = process.env.CYPRESS_PROJECT_ID;
}

// Logging the config
if (process.env.VERBOSE) {
  console.log(configJson);
}

fs.writeFileSync(path.join(__dirname, '../cypress${process.env.CI ? "" : ".test"}.json'), JSON.stringify(configJson, null, 2));