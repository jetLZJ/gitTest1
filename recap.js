function getAge(){
    let age=2;
    let incre_age = age + 1;

    return age;
}

let details = {
    first_name:"jet",
    last_name:"Lee"
};

let detailsArr= [
    {
        first_name:"jet1",
        last_name:"Lee"
    },
    
    {
        first_name:"jet2",
        last_name:"Lee"
    }
]
const readline = require("readline");
response = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(`response`, name => {
    console.log(`Hi ${name}!`)
    readline.close()
  })

console.log(`${detailsArr[0].first_name} ${detailsArr[0].last_name} is of age ${getAge()} and my response is ${response}`);

