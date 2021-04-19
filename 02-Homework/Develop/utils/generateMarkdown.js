// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

# ${response.description}

[![License](https://img.shields.io/badge/License-${response.liscence}-lightblue.svg)](https://www.${response.liscence}.org/LICENSE_1_0.txt)

# ${response.contents}
## TABLE OF CONTENTS
1. [Title](#Title)
2. [Description](#Decsription)
3. [Installation](#Installation)
4. [Usage](#Usage)
5. [License](#License)
6. [Contributing](#Contribution)
7. [Tests](#Tests)
8. [Questions](#Questions)

# ${response.installation}

# ${response.usage}

# ${response.contributors}

# ${response.test}

# ${response.questions}
`;


}

module.exports = generateMarkdown;
