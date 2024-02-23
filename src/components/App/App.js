import React from 'react';

import Game from '../Game';
import Header from '../Header';
import GuessInput from '../GuessInput';

function App() {
  const [guesses, setGuesses] = React.useState([])

  const handleAddGuess = (word) => {
    const nextGuesses = [...guesses, {
      id: crypto.randomUUID(),
      value: word,
    }];

    setGuesses(nextGuesses);
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
