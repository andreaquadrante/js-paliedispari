// creo una funzione per invertire una stringa
var reverseString = '';
function reverse (string) {
  for (var i = string.length; i >= 0; i--) {
    reverseString += string.charAt(i);
  }
  return reverseString;
}

// creo una funzione per verificare se la parola è palindroma o meno
var palindrome = false;
function isPalindrome (userWord) {
  if (userWord == reverseString) {
    palindrome = true;
  }
  return palindrome;
}

// chiedo all'utente di inserire una parola
var userWord = prompt('Inserisci la parola da verificare');

// eseguo le funzioni create in precedenza per verificare se la parola inserita dall'utente è palindroma o meno
reverse (userWord);
isPalindrome (userWord);
console.log (userWord);
console.log (reverseString);
console.log (palindrome);

var message = 'La parola inserita non è palindroma';
if (palindrome = true) {
  message = 'La parola inserita è palindroma';
}
console.log (message);
