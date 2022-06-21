// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "GNU AGPLv3") {
      return licenseBadge("AGPLv3", "https://img.shields.io/badge/License-AGPLv3-blue.svg");
    } else if (license === "GNU GPLv3") { return licenseBadge("GPLv3", "https://img.shields.io/badge/License-GPLv3-blue.svg");
    } else if (license === "GNU LGPLv3") { return licenseBadge("LGPLv3", "https://img.shields.io/badge/License-LGPLv3-blue.svg");
    } else if (license === "Mozilla Public License 2.0") { return licenseBadge("MPL 2.0", "https://img.shields.io/badge/License-MPL%202.0-blue.svg");
    } else if (license === "Apache License 2.0") { return licenseBadge("Apache 2.0", "https://img.shields.io/badge/License-Apache%202.0-blue.svg");
    } else if (license === "MIT License") { return licenseBadge("MIT", "https://img.shields.io/badge/License-MIT-blue.svg");
    } else if (license === "Boost Software License 1.0") { return licenseBadge("BSL 1.0", "https://img.shields.io/badge/License-BSL%201.0-blue.svg");
    } else if (license === "The Unlicense") { return licenseBadge("Unlicense", "https://img.shields.io/badge/License-Unlicense-blue.svg");
    } else if (license === "No License") { return "";
    } else if (license === "") { return "";
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
  if (license === "GNU AGPLv3") {
    return licenseSection("AGPLv3", "https://www.gnu.org/licenses/agpl-3.0.en.html");
  } else if (license === "GNU GPLv3") { return licenseSection("GPLv3", "https://www.gnu.org/licenses/gpl-3.0.en.html");
  } else if (license === "GNU LGPLv3") { return licenseSection("LGPLv3", "https://www.gnu.org/licenses/lgpl-3.0.en.html");
  } else if (license === "Mozilla Public License 2.0") { return licenseSection("MPL 2.0", "https://www.mozilla.org/en-US/MPL/2.0/");
  } else if (license === "Apache License 2.0") { return licenseSection("Apache 2.0", "https://www.apache.org/licenses/LICENSE-2.0");
  } else if (license === "MIT License") { return licenseSection("MIT", "https://opensource.org/licenses/MIT");
  } else if (license === "Boost Software License 1.0") { return licenseSection("BSL 1.0", "https://www.boost.org/LICENSE_1_0.txt");
  } else if (license === "The Unlicense") { return licenseSection("Unlicense", "https://unlicense.org/");
  } else if (license === "No License") { return "";
  } else if (license === "") { return "";
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Contributing](#contributing)
  * [Questions](#Questions)
  * [License](#license)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Tests
  ${data.tests}
  ## Contributing
  ${data.contributing}
  ## Questions
  ${data.questions}
  ## License
  ${data.license}
  `;
}

export default generateMarkdown;