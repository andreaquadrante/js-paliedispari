// creo una funzione per invertire una stringa
function reverse (string) {
  var reverseString = '';
  for (var i = string.length; i >= 0; i--) {
    reverseString += string.charAt(i);
  }
  return reverseString;
}

// creo una funzione per verificare se una parola è palindroma
function isPalindrome (word) {
  var reverseWord = reverse (word);
  return word == reverseWord;
}

// chiedo all'utente di inserire una parola
var userWord = prompt('Inserisci la parola da verificare').toLowerCase();

// eseguo le funzioni create in precedenza per verificare se la parola inserita dall'utente è palindroma o meno
var reverseUserWord = reverse (userWord);
var isUserWordPalindrome = isPalindrome (userWord);

// definisco un messaggio da visualizzare per comunicare il risultato della verifica
var message = 'La parola inserita non è palindroma';
if (isUserWordPalindrome) {
  message = 'La parola inserita è palindroma';
}

console.log ('PAROLA INSERITA', userWord);
console.log ('PAROLA INSERITA INVERTITA', reverseUserWord);
console.log ('PALINDROMA O NO?', isUserWordPalindrome);
console.log ('RISULTATO', message);
