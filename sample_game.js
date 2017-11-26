var button1 = document.querySelector("#b1");
var button2 = document.querySelector("#b2");
var buttonr = document.querySelector("#br");
var display1 = document.querySelector("#s1");
var display2 = document.querySelector("#s2");
var inputnum = document.querySelector("input");
var winnum = document.querySelector("#w");

var gameOver = false;
var winning = 5;
var score1 = 0;
var score2 = 0;

button1.addEventListener("click", function(){
	if(!gameOver){
		score1++;
		display1.textContent = score1;
	}
	if(score1 === winning){
		gameOver = true;
		display1.classList.add("winner");
	}
});

button2.addEventListener("click", function(){
	if(!gameOver){
		score2++;
		display2.textContent = score2;
	}
	if(score2 === winning){
		gameOver = true;
		display2.classList.add("winner");
	}
});

function reset(){
	score1 = 0;
	score2 = 0;
	display1.textContent = 0;
	display2.textContent = 0;
	display1.classList.remove("winner");
	display2.classList.remove("winner");
	gameOver = false;
}

buttonr.addEventListener("click", reset)


inputnum.addEventListener("change", function(){
	winnum.textContent = inputnum.value;
	winning = Number(inputnum.value);
	reset();

});