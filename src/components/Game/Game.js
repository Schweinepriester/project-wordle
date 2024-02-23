import React from 'react';

import { sample } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { WORDS } from '../../data';

import GuessResults from '../GuessResults'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game({ guesses }) {
  return (
    <GuessResults guesses={guesses.map((guess) => {
      if (guess.word.length > 0) {
        checkGuess(guess.word, answer).map((checkGuessEntry, index) => {
          guess.value[index].status = checkGuessEntry.status
        })
      }
      return guess;
    })} />
  );
}

export default Game;
