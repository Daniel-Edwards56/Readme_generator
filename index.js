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
      message: "what other code needs to be installed?",
    },
    {
      type: "input",
      name: "invoke",
      message: "What is an example of how to invoke your code?",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email for questions.",
    },
    {
      type: "list",
      message: "What is your preferred method of communication?",
      name: "license",
      choices: ["BSD", "MIT", "GPL", "No License"],
    },
  ]);

const generateREADME = (answers) => ``;

const init = () => {
  promptUser().then((answers) => {
    try {
      const md = generateREADME(answers);
      fs.writeFileSync("NEWREADME.md", md);
      console.log("Successfully wrote to NEWREADME.md");
    } catch (error) {
      console.log(error);
    }
  });
};

init();
