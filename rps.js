// 5. add score
// 	5.1 declare playerPoint and computerPoint in global scope and set them 0
let computerPoint=0;
let playerPoint=0;

// 1. declare computerPlay
function computerPlay () {
	// 	1.1 store [rock, paper, scissors] in options 
	const options = ["Rock", "Paper", "Scissors"];
	// 	1.2 pick a ramdom number among 0~2;
	let randomNumber = Math.floor(Math.random() * options.length);
	// console.log (randomNumber);
	// 	1.3 associate randomNumber with array options	
	let randomPick = options[randomNumber];
	return randomPick;
}
// computerPlay ();
// console.log(computerPlay());
	//  1.4 store randomPick as computerSelection	 in global scope
// let computerSelection = computerPlay();
// console.log (computerSelection);

// 2. declare playerPlay
let btn = document.getElementsByClassName("buttons");
console.log (btn);
// loop through the button array and add click eventListener
for (i=0; i<btn.length; i++)
{
	// clickFunction; //-- 1. doesn't work --//
	btn[i].addEventListener("click", clickFunction);//-- 2. WORKS --//
}
// declare clickFunction
function clickFunction(obj) {
	// use pointerEvent to find out where to find the innerText(what's written on each button) of each button
	// document.addEventListener('click', (e) => {console.log(e)}); //-- pointerEvent
	let playerSelection = obj.target.innerHTML;
	console.log (playerSelection);
}
let computerSelection = computerPlay();
console.log (computerSelection);
// // playerPlay ();
// let playerSelection = playerPlay ();
// console.log (playerSelection);

// // 3. Play a round
// function playRound (computerSelection, playerSelection) {
// 	// 3.1 Tie situation
// 	if (computerSelection === playerSelection) {
// 		// 5.2 add one point to both parties when tie
// 		playerPoint=playerPoint+1;
// 		computerPoint=computerPoint+1;
// 		console.log ("Player: "+playerPoint);
// 		console.log ("Computer: "+computerPoint);	
// 		// 3.1.1 alert ("Tie!");
// 		return (`Both picked `+computerSelection+`. It's a tie!`);	
// 	} 
// // 	3.2 computer win
// 		else if (computerSelection=="Rock" && playerSelection=="Scissors" || 
// 						 computerSelection=="Paper" && playerSelection=="Rock" || 
// 						 computerSelection=="Scissors" && playerSelection=="Paper" ||
// 						computerSelection==null){
// 	// 5.3 add one point to computerPoint
// 		computerPoint=computerPoint+1;
// 		console.log ("Player: "+playerPoint);
// 		console.log ("Computer: "+computerPoint);
// 	// 3.2.1 alert ("You Lose! " + computerSelection + " beats " + playerSelection);
// 		return ("You Lose! " + computerSelection + " beats " + playerSelection);
// 	} 
// // 	3.3 player win
// 	else {	
// 	// 5.4 add one point to playerPoint
// 		playerPoint = playerPoint+1;
// 		console.log ("Player: "+playerPoint);
// 		console.log ("Computer: "+computerPoint);
// 	// 3.3.1 alert ("Congratulations! You Win!");
// 		return ("Congratulations! You Win!");	
// 	}
// }

// // 4. Play 5 times in a row
// function game (){
// 	for (i=0; i<5; i++) {
// 		let playerSelection = playerPlay ();
// 		console.log(playerSelection);
// 		let computerSelection = computerPlay();
// 		console.log(computerSelection);
// 		// playRound (computerSelection, playerSelection);
// 		console.log(playRound (computerSelection, playerSelection));
// 	} 
// };

// game();

// // 6. find the winner	
// 	if (computerPoint > playerPoint) {
// 		console.log ("Winner: Computer");
// 	} else if (playerPoint > computerPoint) {
// 			console.log ("Winner: Player");
// 		} else {
// 			console.log ("You Are All Winners!");
// 		}

// // 7. reset the game