// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (appData.license.length > 0) {

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


module.exports.getMarkdown = (appData) => {

return `
![badge](https://img.shields.io/badge/license-${appData.license}-brightgreen)
# ${appData.title}
## Description
${appData.description}
## Usage
${appData.usage}
## License
Covered by the ${appData.license} license.
## Installation
${appData.installation}
## Contribution
${appData.contribution}
## Testing
${appData.testing}
## Questions
If you have any questions or comments  please use the contact info below:
Contact: 
${appData.username}
(https://github.com/${appData.username})
email: ${appData.email}
`  

};