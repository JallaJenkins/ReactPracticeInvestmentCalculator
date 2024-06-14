import { useState } from 'react';

import Header from './components/Header.jsx';
import InputBox from './components/InputBox.jsx';
import Results from './components/Results.jsx';
import UserInput from './components/UserInput.jsx';

const INITIAL_INVESTMENT_STATE = {
  initialInvestment: 1000,
  annualInvestment: 300,
  expectedReturn: 5.5,
  duration: 12,
}

function App() {

  const [userInput, setUserInput] = useState(INITIAL_INVESTMENT_STATE);

  // const [initialInvestment, setInitialInvestment] = useState(1000);
  // const [annualInvestment, setAnnualInvestment] = useState(300);
  // const [expectedReturn, setExpectedReturn] = useState(5.5);
  // const [duration, setDuration] = useState(12);

  const inputIsValid = (
    userInput.duration >= 1
    && userInput.initialInvestment !== 0
    && userInput.annualInvestment !== 0
    && UserInput.expectedReturn !== 0
  );

  function handleInputChange(event, key) {
    setUserInput((prevInput) => {
      const userInput = {
        ...prevInput,
        [key]: +event.target.value,
      };
      return userInput;
    });
  }

  // function handleInitialInvestmentChange(event) {
  //   setInitialInvestment(+event.target.value);
  // }

  // function handleAnnualInvestmentChange(event) {
  //   setAnnualInvestment(+event.target.value);
  // }

  // function handleExpectedReturnChange(event) {
  //   setExpectedReturn(+event.target.value);
  // }

  // function handleDurationChange(event) {
  //   setDuration(+event.target.value);

  // }

  return (
    <>
      <Header />
      <UserInput
        userInput={userInput}
        handleChange={handleInputChange}
      />
      {!inputIsValid && <p className="center">Please enter valid input.</p>}
      {inputIsValid && <Results investments={userInput} />}

    </>
  );
}

export default App
