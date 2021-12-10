var inquirer = require('inquirer');
const cp=require('child_process')
function displayDetails(){
inquirer
  .prompt([
   { /* Pass your questions in here */
    type:'list',
    name:'Selection',
    choices:["About","Skills","Projects","Academics"]
}
  ])
  .then((choices) => {
      if(choices.Selection=='About')
      {
          console.log(`Candidate Name - Monish Tyagi`)
          displayNext()
      }
      else if(choices.Selection=='Skills')
      {
          console.log('java,js,c++,c')
          displayNext()
      }
      else if(choices.Selection=='Projects')
      {
          cp.execSync('start chrome https://github.com/MONISH-TYAGI')
          displayNext()
      }
      else if(choices.Selection=='Academics')
      {
          cp.execSync('start chrome https://www.linkedin.com/login')
          displayNext()
      }
  })
}
displayDetails()
function displayNext(){
var inquirer = require('inquirer');
inquirer
  .prompt([
    {
        type:'list',
        name:'GoBack',
        choices:['black']
    }
  ])
  .then((choice) => {
    if(choice.GoBack='back')
    {
        displayDetails()
    }
  })
}