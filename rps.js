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

// 2. declare playerPlay
// 2.1 grab three buttons
let btn = document.getElementsByClassName("buttons");
// 2.1. check if the buttons are grabbed correctly and see what kind of object they are
// console.log (btn);
// 2.2 loop through the button array and add click eventListener
for (i=0; i<btn.length; i++)
{
	// clickFunction; //-- 1. doesn't work --//
	btn[i].addEventListener("click", clickFunction);//-- 2. WORKS --//
}
// 2.3 declare clickFunction
function clickFunction(obj) {
	// use pointerEvent to find out where to find the innerText(what's written on each button) of each button
	// document.addEventListener('click', (e) => {console.log(e)}); //-- pointerEvent
	let playerSelection = obj.target.innerHTML;
// 5.2 change all of console.log into DOM method
	document.getElementById("div1").innerHTML="Player: "+playerSelection;
	// call function computerPlay after player select her pick
	let computerSelection = computerPlay();
	document.getElementById("div2").innerHTML="Computer: "+computerSelection;
	playRound (computerSelection, playerSelection);
// 4. iterate playRound until one player reaches 5 points
// 4.1 if computerPlay reaches 5 points
	if (computerPoint ==5 && playerPoint ==5) {
		// 4.2 console.log who won and gameover
		document.getElementById("div4").innerHTML="Tie!! GAMEOVER";
		// 4.3 reset game
		computerPoint = 0;
		playerPoint = 0;
	} else if (playerPoint == 5) {
		// 4.2 console.log who won and gameover
		document.getElementById("div4").innerHTML= "Player wins! GAMEOVER";
		// 4.3 reset game
		computerPoint = 0;
		playerPoint = 0;
	} else if (computerPoint == 5) {
		// 4.2 console.log who won and gameover
		document.getElementById("div4").innerHTML="Computer wins! GAMEOVER";
		// 4.3 reset game
		computerPoint = 0;
		playerPoint = 0;
	}
}

// // 3. Play a round
function playRound (computerSelection, playerSelection) {
	// 3.1 Tie situation
	if (computerSelection === playerSelection) {
		// 5.2 add one point to both parties when tie
		playerPoint=playerPoint+1;
		computerPoint=computerPoint+1;
		// console.log ("Player: "+playerPoint+" Computer: "+computerPoint);
		// console.log ("Computer: "+computerPoint);	
		// 3.1.1 alert ("Tie!");
		document.getElementById("div3").innerHTML="It's a tie!";	
		document.getElementById("div4").innerHTML="Player: "+playerPoint+" vs Computer: "+computerPoint;
	} 
// 	3.2 computer win
		else if (computerSelection=="Rock" && playerSelection=="Scissors" || 
						 computerSelection=="Paper" && playerSelection=="Rock" || 
						 computerSelection=="Scissors" && playerSelection=="Paper" ||
						computerSelection==null){
	// 5.3 add one point to computerPoint
		computerPoint=computerPoint+1;
		// console.log ("Player: "+playerPoint);
		// console.log ("Computer: "+computerPoint);
	// 3.2.1 show computer won in written form  & points
	document.getElementById("div3").innerHTML=computerSelection + " beats " + playerSelection;
	document.getElementById("div4").innerHTML="Player: "+playerPoint+" vs Computer: "+computerPoint;
	} 
// 	3.3 player win
	else {	
	// 5.4 add one point to playerPoint
		playerPoint = playerPoint+1;
		// console.log ("Player: "+playerPoint);
		// console.log ("Computer: "+computerPoint);
	// 3.3.1 alert ("Congratulations! You Win!");
		document.getElementById("div3").innerHTML=playerSelection + " beats " + computerSelection;
		document.getElementById("div4").innerHTML="Player: "+playerPoint+" vs Computer: "+computerPoint;
	}
}

// 5. Add a div for displaying results and change all of your console.logs into DOM methods.
// 5.1 add a div in html and declare it in js
<<<<<<< HEAD
const div = document.getElementById("div");
=======
// const div = document.getElementById("div");
>>>>>>> rps-ui
