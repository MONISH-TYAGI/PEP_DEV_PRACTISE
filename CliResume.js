var inquirer = require('inquirer');
const cp = require('child_process');


function displayDetails(){
inquirer
  .prompt([
    {
           type:'list',
           name :'Selection',
           choices:['About' , 'Skills' , 'Projects' , 'Academics']
    }
  ])
  .then((choices) => {
       if(choices.Selection =='About'){
              console.log(`Candidate -Monish Tyagi 
              2nd year student 
              BPIT College (GGSIPU)`);
              displayNext()
       }

       else if(choices.Selection=='Skills'){
              console.log('JavaScript , Node , React , GoLang , Java ')
              displayNext()
       }

       else if(choices.Selection=='Projects'){
            cp.execSync('start chrome https://github.com/MONISH-TYAGI')
            displayNext()
       }

       else if(choices.Selection=='Academics'){
              cp.execSync('start chrome http://www.linkedin.com/in/monish-tyagi-ab589a202')
              displayNext()
       }
  })
 
}

displayDetails()


function displayNext(){
       var inquirer = require('inquirer');
inquirer
  .prompt([
         { type:'list',
       name :'GoBack',
       choices:['back']
         }
  ])
  .then((choice) => {
    if(choice.GoBack = 'back'){
           displayDetails()
    }
  })
 
}