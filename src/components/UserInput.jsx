export default function UserInput() {
  return (
    <div id="user-input">
      <div class="input-group">
        <div >
          <label for="initial-investment">Initial Investment</label>
          <input id="initial-investment" type="text"></input>
        </div>
        <div>
          <label for="annual-investment">Annual Investment</label>
          <input id="annual-investment" type="number" defaultValue="300"></input>
        </div>
      </div>
      <br />
      <div class="input-group">
        <div>
          <label for="expected-return">Expected Return</label>
          <input id="expected-return" type="text"></input>
        </div>
        <div>
          <label for="duration">Duration</label>
          <input id="duration" type="text"></input>
        </div>
      </div>
    </div>
  );
}