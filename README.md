# Pig Dice

#### 

#### By **_Jieun Kang and Kristina Hengster Tintor_**

## Description



## Setup/Installation Requirements



## Behavior Driven Development Specifications

| Behavior (Spec)                 | Input    | Output|
| :------------------------------ | :------- | :---- |
| Two players type their names in the form and click "Start Game."| "Kristina", "Jieun", "Start Game"| Player1: Kristina; Player2: Jieun;|
|Player1 rolls the dice. Program generates a random number from 1-6. If the player rolls any number other than 1, it is added to their turn total and the player's turn continues.| Click "Roll a dice" | Dice Number: 2 & Turn total: 2|
| If a player1 chooses to "hold", their turn total is added to their score, and it becomes the next player's turn. | Click "Hold" | Total total: 2, Score:2, "Player2 takes turn" |
|Player2 rolls the dice. Program generates a random number from 1-6 | Click "Roll a dice" | Your number: 5 & Turn total: 5 |
|Player2 rolls the dice. If the player rolls a 1, they score nothing and it becomes the next player's turn. | Click "Roll a dice" | Dice number: 1, Turn total: 0, Socre: 0|
| If player1 scores 100 or more points, player1 wins. | Click "Roll a dice" | Score : 103, "You win, player1(name)!" |
|After game end, if they would like to play again, user can click "Play Again" | Click "Play Again" | Page refresh |

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* JQuery
* Git

### License

*This webpage is licensed under the [MIT](https://en.wikipedia.org/wiki/MIT_License) license*

Copyright (c) 2020 **_Jieun Kang_**