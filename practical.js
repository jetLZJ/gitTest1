


    function add(n1,n2){
        return `n1 + n2 is ${n1+n2}`;
    }

    function sub(n1,n2){
        return `n1 - n2 is ${n1-n2}`;
    }

    function mul(n1,n2){
        return `n1 * n2 is ${n1*n2}`;
    }

    function checkInputYearisLeapYear(inputYr){
        return (inputYr%4==0 && (inputYr%100!=0 || inputYr%400==0)) ? `${inputYr} is Leap Year`:`${inputYr} is not Leap Year`;
    }

    function covertInchToCM(input){
        return `${input} inch is ${input*2.5}cm`;
    }

    function checkNullOrBlank(input){
        return (input===null || input.trim() ==="") ? true : false;
    }



    var readline = require('readline');

    var rl = readline.createInterface(
        process.stdin, process.stdout);

/*

async function checkLeapYear() {
    rl.on('line',  (age) => {
        rl.setPrompt(`Check Leap Year? `);
        rl.prompt();
        console.log(`Year received by the user: ${age}`);
        rl.close();
    });
}

checkLeapYear().then(()=>{
console.log(add(1,2));
console.log(sub(1,2));
console.log(mul(1,2));
console.log(checkInputYearisLeapYear(7));
console.log(checkInputYearisLeapYear(100));
console.log(covertInchToCM(1));
console.log(checkNullOrBlank(null));
console.log(checkNullOrBlank(""));
console.log(checkNullOrBlank(" 2"));
console.log(checkNullOrBlank("Asd"));
});
*/
const inputLeapYear = () => {
    return new Promise(() => {
    rl.question('Check Leap Year?', async (ly) => {
    rl.close();
    console.log(add(1,2));
    console.log(sub(1,2));
    console.log(mul(1,2));
    console.log(checkInputYearisLeapYear(7));
    console.log(checkInputYearisLeapYear(100));
    console.log(checkInputYearisLeapYear(ly));
    console.log(covertInchToCM(1));
    console.log(checkNullOrBlank(null));
    console.log(checkNullOrBlank(""));
    console.log(checkNullOrBlank(" 2"));
    console.log(checkNullOrBlank("Asd"));
    });
    });
    };

    inputLeapYear();