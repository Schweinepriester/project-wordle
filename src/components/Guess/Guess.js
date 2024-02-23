import React from 'react';

function Guess({ guess }) {

  return (
    <p className="guess" key={guess.id}>
      {guess.value.map((letterEntry) => (
        <span className="cell" key={letterEntry.id}>{letterEntry.letter}</span>
      ))}
    </p>
  );
}

export default Guess;
