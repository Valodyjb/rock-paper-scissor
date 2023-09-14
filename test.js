var compChoice = "";
var playerChoice = "";
var playerScore = 0;
var compScore = 0;
var goAgain= true;
var choices = ["rock","paper","scissor"];
var name = prompt("What is your name?");


alert("Welcome to Rock Paper Scissor. This will be a 5 win rush between " + name +" and an AI. May the superior intellect win");
game();


function game(){
while(goAgain == true){

while (playerScore <5 && compScore <5){
playerChoice = prompt("please choose either Rock, Paper, or Scissor");
playerChoice=playerChoice.toLowerCase();
playerChoiceValidation();

function playerChoiceValidation(){
while(playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !=="scissor"){
	
	alert("That was not a valid answer, please choose again ");
	playerChoice = prompt("Your choices are Rock, Paper, or Scissor");
	playerChoice=playerChoice.toLowerCase();
	}
	getCompChoice();
}
function getCompChoice(){
	compChoice = choices[Math.floor((Math.random()*3))];
	console.log("The computer chooses: "+compChoice);	
	winCon(playerChoice,compChoice);
}

function winCon (p,c){
	if (p==c){
		console.log("Nobody wins, " + p + " is the same as " + c );
		console.log("The score is: Player: " + playerScore +" computer: " + compScore);
	}else if ((p=="rock" && c=="scissor")||
		(p=="paper" && c=="rock")  ||
		(p=="scissor" && c=="paper"))
			
	{
		console.log("Congratulations you won, " + p + " beats " + c );
		playerScore++;
		console.log("The score is: Player: " + playerScore +" computer: " + compScore); 
	} else {
		console.log("You did not win , " + p + " loses to " + c );
		compScore++;
		console.log("The score is: Player: " + playerScore +" computer: " + compScore); 
			}
		}
	}


if(playerScore===5){
	alert("Congratulations "+ name + " won the game!!");
	} else {
		alert("Oh no, the computer won!");
	}

playerScore=0;
compScore=0;

goAgain = confirm("Go again?");
	}
}

