import InputBox from "./InputBox";

export default function UserInput({ userInput, handleChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <InputBox id="initial-investment" label="Initial Investment" value={userInput.initialInvestment} onChange={(event) => handleChange(event, 'initialInvestment')} />
        <InputBox id="annual-investment" label="Annual Investment" value={userInput.annualInvestment} type="number" onChange={(event) => handleChange(event, 'annualInvestment')} />
      </div>
      <br />
      <div className="input-group">
        <InputBox id="expected-return" label="Expected Return" value={userInput.expectedReturn} onChange={(event) => handleChange(event, 'expectedReturn')} />
        <InputBox id="duration" label="Duration" defaultValue="12" value={userInput.duration} onChange={(event) => handleChange(event, 'duration')} />
      </div>
    </div>
  );
}