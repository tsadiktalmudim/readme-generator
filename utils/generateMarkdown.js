const fs = require(fs);

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
class renderLicenseSection {
  constructor(license) {}

  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  renderLicenseLink(license) {}

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  renderLicenseBadge(license) {}
}

// TODO: Create a function to generate markdown for README
class generateMarkdown {
  constructor(data) {
    return `# ${data.title}

`;
  }
}

module.exports = generateMarkdown;
