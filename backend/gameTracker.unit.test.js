import { GameTracker } from "./gameTracker";

// unit testing using jest
// run from command line using 'yarn test'

describe('check guess', () => {
    let tracker = new GameTracker();

    test('class existence', () => {
        new GameTracker();
    });

    // checkGuess() returns [greenLetters[], grayLetters[], orangeLetters[],];

    test("verify 'checkGuess()' exists", () => {
        tracker.checkGuess('a', 'a');
    });

    test("verify a guess of 'a' equals an answer of 'a'", () => {
        expect(tracker.checkGuess(guess='a', answer='a')).toEqual([[0],[],[]]);
    })

    test("verify a guess of 'a' does not equal an answer of 'b'", () => {
        expect(tracker.checkGuess(guess='a', answer='b')).toEqual([[],[0],[]]);
    })

    test("verify a guess of 'aaxxx' and answer of 'aayyy' returns two green locations", () => {
        expect(tracker.checkGuess(guess='aaxxx', answer='aayyy')).toEqual([[0,1,],[2,3,4,],[]]);
    })

    test("verify a guess of 'aaaxx' and answer of 'yyyaa' returns three orange and two gray locations", () => {
        expect(tracker.checkGuess(guess='aaaxx', answer='yyyaa')).toEqual([[],[3,4,],[0,1,2,]]);
    })
})