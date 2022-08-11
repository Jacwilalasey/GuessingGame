# Guessing Game - Loops & Break Practice

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- Set a highest number
- Repeatedly guess the correct number, being prompted higher or lower after each guess
- Quit the game prematurely using 'q'

## My process

### Built with

- Semantic HTML5 markup
- JavaScript

### What I learned

I learned how to use while loops, utilising the loop to create a continuous question along with prompts up until the correct answer has been guessed. Along with this I utlisied the break keyword in the loop to allow a player to exit prior to guessing the correct number:

```while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = parseInt(prompt("Too high! Enter a new guess:"));
        } else {
        guess = parseInt(prompt("Too low! Enter a new guess:"));
        }
    }
```

### Useful resources

- [Dev recap and bug fix](https://www.youtube.com/watch?v=VG27YwzEFB8&ab_channel=DevSprout) - This was useful as a recap tool and also highlighted an unknown bug in the ability to quit the game early. 
