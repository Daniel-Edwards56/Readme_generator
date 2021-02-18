const inquirer = require("inquirer");
const fs = require("fs");

const promptUser = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Write a short description of what your code does?",
    },
    {
      type: "input",
      name: "install",
      message: "What other code needs to be installed?",
    },
    {
      type: "input",
      name: "invoke",
      message: "What is an example of how to invoke your code?",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your or each of your teams GitHub Username(s)",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email for questions.",
    },
    {
      type: "list",
      message: "What license would you like to add to your README?",
      name: "license",
      choices: ["MIT", "No License"],
    },
  ]);

const generateREADME = (answers) =>
  `
# ${answers.name}

${answers.license}

## Table of Contents

* Description, Instalation, Usage
* Questions
* License

## Description
${answers.description}

${answers.install} will also need to be installed for this code to work.

${answers.invoke} is how to invoke this code.

## Questions
Check us out on GitHub at ${answers.github} for any questions or you can email us at ${answers.email}.

`;

const init = () => {
  promptUser().then((answers) => {
    const answerCheck = () => {
      if (answers.license === "No License") {
        answers.license = "";
      } else {
        answers.license = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      }
    };

    try {
      answerCheck();
      const md = generateREADME(answers);
      fs.writeFileSync("NEWREADME.md", md);
      console.log("Successfully wrote to NEWREADME.md");
    } catch (error) {
      console.log(error);
    }
  });
};

init();
