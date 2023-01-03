import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';


function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');
  const hendelClick = () => {
    let random = Math.floor(Math.random() * 10 + 1);
    console.log('====================================');
    console.log(random);
    console.log('====================================');
    if (number !== "") {
      if (random === Number(number)) {
        setResult("Yay!! You Guessed it right 🥳");
      } else {
        setResult("Oops!! Wrong Guess 😬");
      }
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h5>
          Here you need to guess a number between 1 to 10 <br />
          If your guessed number matches with the random number generated <br />
          then you win or else you lose
        </h5>
        <input type={'number'} className="randomNumber" name="randomNumber" onChange={(e) => setNumber(e.target.value)} value={number} />
        <button className='styled' type='button' onClick={hendelClick}>Check</button>
        <p>{result}</p>
      </header>
    </div>
  );
}

export default App;
