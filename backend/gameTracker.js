export class GameTracker {
    constructor() {}

    checkGuess(guess, answer) {
        // Assumes inputs guess and answer are both 5 letter words
        // track guess result
        greenLetters = [];  // guess letters that lign up with answer location
        grayLetters = [];   // guess letters not in answer
        orangeLetters = []; // guess letters in answer, but in wrong location
        answerLetterCount = [];  // number of each unique letter in answer word

        // loop through each letter and look for match with answer
        for (let i = 0; i < guess.length; i++) {
            foundLetter = false;

            // first check to see if the letter location matches answer letter location
            if (guess[i] == answer[i]) {
                greenLetters.push(i);
                foundLetter = true;
                continue;  // next i
            }

            // next look for letter in another location
            for (let j = 0; j < answer.length; j++) {
                if (guess[i] === answer[j]) {
                    orangeLetters.push(i);
                    foundLetter = true;
                    break;  // exit for loop (next i)
                }
            }

            // guess letter not found in answer word
            if (foundLetter == false) {
                grayLetters.push(i);
            }
        }
        
        // return the three result arrays
        return [greenLetters, grayLetters, orangeLetters];
    }
}