import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import InputBox from './components/InputBox.jsx';

function App() {
  return (
    <>
      <Header />
      <div id="user-input">
        <div class="input-group">
          <InputBox id="initial-investment" label="Initial Investment" defaultValue="10000" />
          <InputBox id="annual-investment" label="Annual Investment" defaultValue="300" type="number" />
        </div>
        <br />
        <div class="input-group">
          <InputBox id="expected-return" label="Expected Return" defaultValue="5.5" />
          <InputBox id="duration" label="Duration" defaultValue="12" />
        </div>
      </div>

    </>
  );
}

export default App
