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

  // TODO: Consolodate into one object ??
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [annualInvestment, setAnnualInvestment] = useState(300);
  const [expectedReturn, setExpectedReturn] = useState(5.5);
  const [duration, setDuration] = useState(12);


  const investments = {
    initialInvestment: initialInvestment,
    annualInvestment: annualInvestment,
    expectedReturn: expectedReturn,
    duration: duration,
  };

  // const [investmentState, setInvestmentState] = useState(INITIAL_INVESTMENT_STATE);

  // TODO: Move functions and InputBoxes to UserInput ??
  function handleInitialInvestmentChange(event) {
    setInitialInvestment(event.target.value);
  }

  function handleAnnualInvestmentChange(event) {
    setAnnualInvestment(event.target.value);
  }

  function handleExpectedReturnChange(event) {
    setExpectedReturn(event.target.value);
  }

  function handleDurationChange(event) {
    setDuration(event.target.value);

  }

  return (
    <>
      <Header />
      <div id="user-input">
        <div className="input-group">
          <InputBox id="initial-investment" label="Initial Investment" value={initialInvestment} onChange={handleInitialInvestmentChange} />
          <InputBox id="annual-investment" label="Annual Investment" value={annualInvestment} type="number" onChange={handleAnnualInvestmentChange} />
        </div>
        <br />
        <div className="input-group">
          <InputBox id="expected-return" label="Expected Return" value={expectedReturn} onChange={handleExpectedReturnChange} />
          <InputBox id="duration" label="Duration" defaultValue="12" value={duration} onChange={handleDurationChange} />
        </div>
      </div>
      <Results investments={investments} />

    </>
  );
}

export default App
