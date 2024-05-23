const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

async function promptUser() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter text for the logo (up to 3 characters):",
      validate: (input) =>
        input.length <= 3 || "Text must be 3 characters or less.",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter the text color (color keyword or hexadecimal):",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape for the logo:",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter the shape color (color keyword or hexadecimal):",
    },
  ]);
}

promptUser();
