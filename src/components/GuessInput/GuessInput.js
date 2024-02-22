import React from 'react';

function GuessInput() {
  const [guessInput, setGuessInput] = React.useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    console.log(guessInput.toUpperCase())
    setGuessInput('')
  }

  return <form className="guess-input-wrapper" onSubmit={submitHandler}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input 
      id="guess-input"
      type="text" 
      value={guessInput}
      pattern="\w{5,5}"
      required
      onChange={event => {
        setGuessInput(event.target.value)
      }}
      />
  </form>;
}

export default GuessInput;
