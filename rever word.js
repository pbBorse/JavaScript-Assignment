//Q1. Take a sentence as an input and reverse every word in that sentence. 
//Example - This is a sunny day > shiT si a ynnus yad;

function reverseWordsInSentence(sentence) {
 
  var words = sentence.split(' ');

 var reversdWords = [];
  
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var reversedWord = '';
    
      for (var j = word.length - 1; j >= 0; j--) {
      reversedWord += word[j];
    }
    
    reversedWords.push(reversedWord);
  }
  var reversedSentence = reversedWords.join(' ');
  
  return reversedSentence;
}

var inputSentence = "This is a sunny day";
var reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence); 
