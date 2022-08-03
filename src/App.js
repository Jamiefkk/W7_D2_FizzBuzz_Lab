import './App.css';
import React, {useState, useEffect} from 'react';


function App() {

  const [number, setNumber] = useState(0);
  const [fizzBuzzAnswer, setFizzBuzzAnswer] = useState(0);

  useEffect(() => {
    console.log("use effect triggers")
    if (number % 3 === 0 && number % 5 === 0) {
      setFizzBuzzAnswer("fizzbuzz")
    } else if (number % 3 === 0) {
      setFizzBuzzAnswer("fizz")
    } else if (number % 5 === 0) {
      setFizzBuzzAnswer("buzz")
    } else {
      setFizzBuzzAnswer(number);
    }
  }, [number]);

  const handleInc = () => {
    setNumber(number + 1);
  };

  const handleDec = () => {
    setNumber(number - 1);
  };
  
  
  // const fizzBuzzCheck = (number) => {
  //   if (number % 3 === 0 && number % 5 === 0) {
  //     setFizzBuzzAnswer("fizzbuzz")
  //   } else if (number % 3 === 0) {
  //     setFizzBuzzAnswer("fizz")
  //   } else if (number % 5 === 0) {
  //     setFizzBuzzAnswer("buzz")
  //   } else {
  //     setFizzBuzzAnswer(number);
  // }};


  return (
    <>
        <h1>FizzBuzz</h1>
        <button value={number} onClick={handleInc}>+</button>
        <button value={number} onClick={handleDec}>-</button>
        <h2>Number is: {number}</h2>
        <h3>{fizzBuzzAnswer}</h3>
    </>
  );
}

export default App;
