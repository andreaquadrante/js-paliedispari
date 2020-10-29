// creo una funzione per generare un numero casuale che abbia un range
function randomNumber (min, max) {
  max++;
	return Math.floor((Math.random() * (max - min) + min));
}

// creo una funzione per verificare se un numero è pari
function isEven (number) {
  return number % 2 == 0;
}

var runGameButton = document.getElementById('runGame');
var userPlayEl = document.getElementById('userPlay');
var computerPlayEl = document.getElementById('computerPlay');
var gameResultEl = document.getElementById('gameResult');

runGameButton.addEventListener ('click', function() {

  var userChoice = document.getElementById('userChoice').value;
  var userNumber = parseInt(document.getElementById('userNumber').value);
  var computerNumber = randomNumber(1, 5);
  var numberSum = userNumber + computerNumber;

  var resultMessage = 'HAI PERSO...';
  if (isEven (numberSum) && (userChoice == 'PARI')) {
    resultMessage = 'HAI VINTO!'
  } else if (!isEven (numberSum) && (userChoice == 'DISPARI')) {
      resultMessage = 'HAI VINTO!'
  }

  console.log (userChoice);
  console.log (userNumber);
  console.log (computerNumber);
  console.log (numberSum);

  userPlayEl.innerHTML = 'Hai scelto ' + userChoice + ' e hai tirato ' + userNumber;
  computerPlayEl.innerHTML = 'Il computer ha tirato ' + computerNumber;
  gameResultEl.innerHTML = resultMessage;

})
