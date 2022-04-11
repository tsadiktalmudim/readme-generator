const inquirer = require("inquirer");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  inquirer.prompt([
    {
      type: "input",
      name: "licenseName",
      message: "What license are you using for this project?",
    },
    {
      type: "checkbox",
      name: "color",
      choices: ["Brightgreen", "Green", "Blue", "Lightgrey"],
    },
  ])
  .then(renderLicenseLink, renderLicenseBadge)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  this.license = license;
  return `#${data.licenseName}
  Copyright (c) ${new Date().getFullYear()}\n
  For more information about licensing, please visit [choosealicense.com].(https://choosealicense.com/)
  `
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  license = `https://img.shields.io/badge/license-${data.licenseName}-${data.color}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}
  ${renderLicenseBadge(data.license)}
  # Description
  ${data.description}
  # Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Questions](#questions)
  
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  ${renderLicenseSection(data.licenseConfirm)}
  ${renderLicenseLink(data.license)}
  # Contribution
  ${data.contributors}
  # Questions
  If you have any question you can contact me here: 
  *[${data.username}](${data.gitLink})
  *email: ${data.email}
`;
}

module.exports = { generateMarkdown, renderLicenseBadge, renderLicenseSection };
