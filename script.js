let totalTeams = 32;
let a = [];
let totalGames = null;
let reducer = (accumulator, currentValue) => accumulator + currentValue;

while (totalTeams > 0.5 ) {
  a.push(totalTeams);
  totalTeams = totalTeams / 2;
}

totalGames = a.reduce(reducer);

function ncaa(con) {

	let a = 1; // home team
	let b = con / 100; // away team
	let choicesPerGame = a+b; // who will win, a or b?

	let chances = Math.pow(choicesPerGame, totalGames);

	document.querySelector('.result').innerHTML = chances;
	document.querySelector('.odds').innerHTML = (1/chances)*100+'%';

}

let slider = document.getElementsByClassName('js-slider')[0];

slider.oninput = function() {
  ncaa(this.value);
}

ncaa(100);