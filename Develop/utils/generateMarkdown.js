// TODO: Create a function that returns a license badge based on which license is passed in

const { default: inquirer } = require("inquirer");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== `none`) {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license !== `none`) {
  return (
    `*[license](#license)`
  );
}
return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license !== `none`){
  return (
    `## License
    This project is licensed under the ${license} license` 
  );
} return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description 
  ${data.description}

  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)
  *[License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Tests
  ${data.tests}

  ## Questions
  * GitHub Username: ${data.username}
  * Email: ${data.email}
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;