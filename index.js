//rock paper scissors!!
// 0 = rock
// 1 = paper
// 2 = scissors

//Math.floor returns int, Math.random() * 3 returns a value from 0-2
var generate = Math.floor(Math.random() * 3);
console.log(generate)

//user input
var player = prompt("please enter rock, paper, or scissors");

console.log("\tyou picked " + player);

//assigning numbers to user input
if (player == "rock") {
  player = 0
}

if (player == "paper") {
  player = 1
}

if (player == "scissors") {
  player = 2
}

//loser cases
if ((player == 2) && (generate == 0)) {
  console.log("\nyou lose!!");
} else if (player == generate - 1) {
  console.log("\nyou lose!!");
 
}

//winner cases
if (player == generate + 1) {
  console.log("\nyou win!!");
} else if ((player == 0) && (generate == 1)) {
  console.log("\nyou win!!");

}

//tie
if (player == generate) {
  console.log("\nit's a tie!!")
}


