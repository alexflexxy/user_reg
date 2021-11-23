alert("Welcome to flexGame");

let randomNum = Math.floor(Math.random() * 6) + 1;   //1 - 6
let randomDiceImage = "dice" + randomNum + ".jpg";   //dice1.jpg - dice6.jpg
let randomImageSource = "images/" + randomDiceImage;  //images/dice1.jpg - images/dice6.jpg
document.querySelector("img").setAttribute("src", randomImageSource);

if (randomNum === 4) {
	document.querySelector("h1").innerHTML = "good! you rolled a 4!";
} else if (randomNum === 5) {
	document.querySelector("h1").innerHTML = "great! you rolled a 5!";
} else if (randomNum === 6) {
	document.querySelector("h1").innerHTML = "excellent! YOU ROLLED A 6!";
} else {
	document.querySelector("h1").innerHTML = " try again, you rolled below 4!";
}