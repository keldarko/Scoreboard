let scoreNumber = 0;
let guestScoreNumber = 0;

let score = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

console.log("home-score");
console.log(score);

function plus1() {
	scoreNumber += 1;
	console.log(scoreNumber);
	score.innerText = scoreNumber;
}

function plus2() {
	scoreNumber += 2;
	console.log(scoreNumber);
	score.innerText = scoreNumber;
}
function plus3() {
	scoreNumber += 3;
	console.log(scoreNumber);
	score.innerText = scoreNumber;
}

// Guest functions

function guestplus1() {
	guestScoreNumber += 1;
	console.log(guestScoreNumber);
	guestScore.innerText = guestScoreNumber;
}

function guestplus2() {
	guestScoreNumber += 2;
	console.log(guestScoreNumber);
	guestScore.innerText = guestScoreNumber;
}
function guestplus3() {
	guestScoreNumber += 3;
	console.log(guestScoreNumber);
	guestScore.innerText = guestScoreNumber;
}
