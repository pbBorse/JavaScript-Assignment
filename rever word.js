//Q1. Take a sentence as an input and reverse every word in that sentence. 
//Example - This is a sunny day > shiT si a ynnus yad;

function reverseWordsInSentence(sentence) {
    
    const words = sentence.split(' ');
    
    const reversedWords = words.map(word => reverseWord(word));
    
    const reversedSentence = reversedWords.join(' ');
    
    return reversedSentence;
}

function reverseWord(word) {
    // Convert the word into an array of characters, reverse it, and then join it back
    return word.split('').reverse().join('');
}

// Example usage
const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence); 
