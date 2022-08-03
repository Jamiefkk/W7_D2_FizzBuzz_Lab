import './App.css';
import React, {useState, useEffect} from 'react';


function App() {

  const [number, setNumber] = useState(0);
  const [fizzBuzzAnswer, setFizzBuzzAnswer] = useState(0);
  const [var1, setVar1] = useState(3);
  const [var2, setVar2] = useState(5);

  useEffect(() => {
    console.log("use effect triggers")
    if (number % var1 === 0 && number % var2 === 0) {
      setFizzBuzzAnswer("fizzbuzz")
    } else if (number % var1 === 0) {
      setFizzBuzzAnswer("fizz")
    } else if (number % var2 === 0) {
      setFizzBuzzAnswer("buzz")
    } else {
      setFizzBuzzAnswer(number);
    }
  }, [number, var1, var2]);

  const handleInc = () => {
    setNumber(number + 1);
  };

  const handleDec = () => {
    setNumber(number - 1);
  };

  const handleVar1Change = (event) => {
    setVar1(event.target.value)
  }
  
  const handleVar2Change = (event) => {
    setVar2(event.target.value)
  }
  

  return (
    <>
        <h1>FizzBuzz</h1>
        <button value={number} onClick={handleInc}>+</button>
        <button value={number} onClick={handleDec}>-</button>
        <h2>Number is: {number}</h2>
        <form>
          <input 
          type="number" 
          placeholder="choose fizz number" 
          value={var1}
          onChange={handleVar1Change}/>
          <input 
          type="number" 
          placeholder="choose buzz number" 
          value={var2}
          onChange={handleVar2Change}/>
        </form>
        <h3>{fizzBuzzAnswer}</h3>
    </>
  );
}

export default App;
