console.clear();
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const html = require("./src/htmltemplate.js");
const Employee = require("./lib/Employee.js");
const path = require("path")
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/htmltemplate")
var tucker = new Manager("Tucker", 2000, "t@aol.com", 8045553366)
const employeeList = [];
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const managerAnswers = [

    {
         type: "input",
         name: "name",
         message: "What is the Managers's name?: "
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
     type: "input",
     name: "officeNumber",
     message: "Input the employee's office number: "
}
];


// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
const buildTeamQuestions = [
   {
     type: "list",
     name: "role",
     message: "Would you like to add another employee?",
     choices: [
          "Engineer",
          "Intern",
          "Finished"
     ]
}]
const internQuestions = [
     {
         type: 'input',
         name: 'name',
         message: 'Enter intern name:',
     },
     {
         type: 'number',
         name: 'id',
         message: 'Enter intern ID:',
     },
     {
         type: 'input',
         name: 'email',
         message: 'Enter intern email:',
     },
     {
         type: 'input',
         name: 'school',
         message: 'Enter intern school:',
     },
 
 ]
 const engineerQuestions = [
     {
         type: 'input',
         name: 'name',
         message: 'Enter engineer name:',
     },
     {
         type: 'number',
         name: 'id',
         message: 'Enter engineer ID:',
     },
     {
         type: 'input',
         name: 'email',
         message: 'Enter engineer email:',

     },
     {
         type: 'input',
         name: 'github',
         message: 'Enter engineer github:',
     },
 ];
 function renderEngineer(){
     inquirer.prompt(engineerQuestions).then((res) => {
          // create a new Engineer obj 
          let employee = new Engineer(res.name, res.id, res.email, res.github); 
                          // add into employeeList []
                          employeeList.push(employee);
                          console.log(employeeList);
                          //prompt if the user would like to add more team members
                          inquirer.prompt(buildTeamQuestions)
                              .then((choice) => {
                          console.log(choice)
                         if (choice.role != "Finished") {
                              buildTeam(choice.role);
                         }
                         else {renderFinished()}
                         })
     })
 }
 function renderIntern(){
     inquirer.prompt(internQuestions).then((res) => {
          // create a new Intern obj 
          let employee = new Intern(res.name, res.id, res.email, res.school); 
                          // add into employeeList []
                          employeeList.push(employee);
                          console.log(employeeList);
                          //prompt if the user would like to add more team members
                          inquirer.prompt(buildTeamQuestions)
                              .then((choice) => {
                          console.log(choice)
                         if (choice.role != "Finished") {
                              buildTeam(choice.role);
                         }
                         else {renderFinished(employeeList)}
                         })
     })
 }

 function renderFinished (teamMembers) {
      console.log(teamMembers);
      //if the output folder doesn't exist then create one
      if (!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR)
        }
        //else write file
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
 }
function buildTeam(responses){
     console.log(responses)

     //if user selected an engineer then pass through the engineer questions
 if (responses == "Engineer") {
      renderEngineer();
}
else if (responses == "Intern") {
     renderIntern();
}}

   function writeToFile(fileName, data) {
     //create a new file
     fs.writeFile(fileName, data, function(err) {
         console.log(fileName)
         console.log(data)
         if (err) {
             return console.log(err)
         } else {
             console.log("Successfully created Team Portfolio HTML!")
         }
     }  )
 }
 
//store the new object
function init() {
     inquirer
         .prompt(managerAnswers)
         .then((resp) => {
             console.log("=============================================")
             console.log(`Welcome ${resp.name}!\n`);
             // create a new Manager obj 
             let employee = new Manager(resp.name, resp.id, resp.email, resp.officeNumber)
             // add into employee [{}]
             employeeList.push(employee)
             inquirer.prompt(buildTeamQuestions).then((choice) => {
                  console.log(choice.role)
                 buildTeam(choice.role)
             })
         })
 }
 init()


