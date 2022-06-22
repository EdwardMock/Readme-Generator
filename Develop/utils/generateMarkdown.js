// TODO: Create a function using shields.io that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "GNU AGPLv3") {
      return renderLicenseBadge("AGPLv3", "https://img.shields.io/badge/License-AGPLv3-blue.svg");
    } else if (license === "GNU GPLv3") {
      return renderLicenseBadge("GPLv3", "https://img.shields.io/badge/License-GPLv3-blue.svg");
    } else if (license === "GNU LGPLv3") {
      return renderLicenseBadge("LGPLv3", "https://img.shields.io/badge/License-LGPLv3-blue.svg");
    } else if (license === "Mozilla Public License 2.0") {
      return renderLicenseBadge("MPL 2.0", "https://img.shields.io/badge/License-MPL%202.0-blue.svg");
    } else if (license === "Apache License 2.0") {
      return renderLicenseBadge("Apache 2.0", "https://img.shields.io/badge/License-Apache%202.0-blue.svg");
    } else if (license === "MIT License") {
      return renderLicenseBadge("MIT", "https://img.shields.io/badge/License-MIT-blue.svg");
    } else if (license === "Boost Software License 1.0") {
      return renderLicenseBadge("BSL 1.0", "https://img.shields.io/badge/License-BSL%201.0-blue.svg");
    } else if (license === "The Unlicense") {
      return renderLicenseBadge("Unlicense", "https://img.shields.io/badge/License-Unlicense-blue.svg");
    } else if (license === "None") {
      return "";
    }
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "GNU AGPLv3") {
    return "https://www.gnu.org/licenses/agpl-3.0.en.html";
  } else if (license === "GNU GPLv3") { return "https://www.gnu.org/licenses/gpl-3.0.en.html";
  } else if (license === "GNU LGPLv3") { return "https://www.gnu.org/licenses/lgpl-3.0.en.html";
  } else if (license === "Mozilla Public License 2.0") { return "https://www.mozilla.org/en-US/MPL/2.0/";
  } else if (license === "Apache License 2.0") { return "https://www.apache.org/licenses/LICENSE-2.0";
  } else if (license === "MIT License") { return "https://opensource.org/licenses/MIT";
  } else if (license === "Boost Software License 1.0") { return "https://www.boost.org/LICENSE_1_0.txt";
  } else if (license === "The Unlicense") { return "https://unlicense.org/";
  } else if (license === "No License") { return "";
  } else if (license === "") { return "";
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "GNU AGPLv3") { return renderLicenseSection("AGPLv3", "https://www.gnu.org/licenses/agpl-3.0.en.html");
  } else if (license === "GNU GPLv3") { return renderLicenseSection("GPLv3", "https://www.gnu.org/licenses/gpl-3.0.en.html");
  } else if (license === "GNU LGPLv3") { return renderLicenseSection("LGPLv3", "https://www.gnu.org/licenses/lgpl-3.0.en.html");
  } else if (license === "Mozilla Public License 2.0") { return renderLicenseSection("MPL 2.0", "https://www.mozilla.org/en-US/MPL/2.0/");
  } else if (license === "Apache License 2.0") { return renderLicenseSection("Apache 2.0", "https://www.apache.org/licenses/LICENSE-2.0");
  } else if (license === "MIT License") { return renderLicenseSection("MIT", "https://opensource.org/licenses/MIT");
  } else if (license === "Boost Software License 1.0") { return renderLicenseSection("BSL 1.0", "https://www.boost.org/LICENSE_1_0.txt");
  } else if (license === "The Unlicense") { return renderLicenseSection("Unlicense", "https://unlicense.org/");
  } else if (license === "No License") { return "";
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown() {
  `# ${answers.title}
  ${renderLicenseBadge()}
  ## Description
  ${answers.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Contributing](#contributing)
  * [Questions](#Questions)
  * [License](#license)
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## Tests
  ${answers.tests}
  ## Contributing
  ${answers.contributing}
  ## Questions
  ${answers.questions}
  ## License
  ${renderLicenseSection()}
  ${renderLicenseLink()}
  `;
}

//export the generateMarkdown function
export default generateMarkdown;
