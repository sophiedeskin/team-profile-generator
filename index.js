console.clear();
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const html = require("./src/htmltemplate.js");
// const Employee = require("./lib/Employee.js");

let answers = inquirer.prompt([

    {
         type: "input",
         name: "name",
         message: "What is the employee's name?: "
    },
    {
         type: "input",
         name: "id",
         message: "Input the employee's ID: "
    },
    {
         type: "input",
         name: "email",
         message: "Input the employee's email address: "
    },
    {
         type: "list",
         name: "role",
         message: "What what is the employee's role:",
         choices: [
              "Engineer",
              "Intern",
              "Manager"
         ]
    }
]);
//if user selects engineer
if (answers.role === "Engineer")
//then they get a question asking the github username
{
    inquirer.prompt([{
        type: "input",
        name: "github",
        message: "What is the employee's github username?:"
    
}
])};
//store the new object

//if user selects manager 
 if (answers.role === "Manager")
//then they get a question asking what their office number is
{
    inquirer.prompt([{
        type: "input",
        name: "officeNumber",
        message: "What is the employee's office number?:"
    
}
])};
//store the new object

//if user selects intern
if (answers.role === "Intern")
//then they get a question asking what school do they go to
{
    inquirer.prompt([{
        type: "input",
        name: "school",
        message: "What school does the employee go to?:"
    
}
])};
//store the new object

then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });