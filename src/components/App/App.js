import React from 'react';

import Game from '../Game';
import Header from '../Header';
import GuessInput from '../GuessInput';

import { range } from '../../utils';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function App() {
  const [guesses, setGuesses] = React.useState(range(0, 6).map(() => {
    return {
      id: crypto.randomUUID(),
      word: '',
      value: range(0, 5).map(() => {
        return {
          id: crypto.randomUUID(),
          letter: '',
          status: '',
        }
      }),
    };
  }))
  const [guessCount, setGuessCount] = React.useState(0)

  const handleAddGuess = (word) => {
    console.log(word)

    if (guessCount < NUM_OF_GUESSES_ALLOWED) {
      const nextGuesses = [...guesses];
      nextGuesses[guessCount].word = word;
      nextGuesses[guessCount].value.map((valueEntry, index) => {
        valueEntry.letter = word[index]
      })
  
      setGuesses(nextGuesses);

      setGuessCount(guessCount + 1);
    }
  }

  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game guesses={guesses} />
        <GuessInput handleAddGuess={handleAddGuess} />
      </div>
    </div>
  );
}

export default App;
