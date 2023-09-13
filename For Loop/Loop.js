// console.log("홀수만 출력하겠습니다");
// for(let i = 1; i <=10; i+=2){
//     console.log(i);
// }

// console.log("점점 작아지는 숫자를 출력합니다");
// for(let i = 10; i >=0; i-=2){
//     console.log(i);
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
// for(let i = 0; i < people.length; i++){
//     console.log(people[i].toUpperCase());
// }
// setTimeout(()=>{
//     console.log("setTimeout 테스트 3초");
// }, 3000);
// setTimeout(()=>{
//     console.log("setTimeout 테스트 1초");
// }, 1000);
// setTimeout(()=>{
//     console.log("setTimeout 테스트 2초");
// }, 2000);

// for(let i =0; i <10; i++){
//     console.log(`i is ${i}`);
//     for(let j = 0; j < 5; j++){
//         console.log(`j is ${j}`);
//     }
// }

let maximum = parseInt(prompt("Enter the maximum number"));
const targetNum = Math.floor(Math.random() * maximum) + 1;
let attempts = 0;

while(!maximum){
    maximum = parseInt(prompt("Enter a valid number!"));
}

let guess = prompt("Enter your guess number");

while(parseInt(guess) !== targetNum){
    if(guess ==='q') break;
    guess = parseInt(guess);
    if(guess > targetNum){
        guess = prompt("Too high! Enter a new guess");
        attempts++;
    }else if(guess < targetNum){
        guess = prompt("Too low! Enter a new guess");
        attempts++;
    }else{
        guess = prompt("Please Enter Number or 'q'");
    }
}
if (guess === 'q'){
    console.log("OK, YOU QUIT!");
}else{
    attempts++;
    console.log("CONGRATS YOU WIN!");
    console.log(`You got it! It took you ${attempts} guesses`);
}
