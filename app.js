let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = parseInt(prompt("Too high! Enter a new guess:"));
        } else {
        guess = parseInt(prompt("Too low! Enter a new guess:"));
        }
    }

    if (guess === 'q') {
        console.log("Ok, Quitter!")
    } else {
        console.log("Congrats, you win!")
    }

    console.log('You got it! It took you ${attempts} guesses')