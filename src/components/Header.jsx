import coinImg from '../assets/investment-calculator-logo.png';

export default function Header({ }) {
  return (
    <header id="header">
      <img src={coinImg} alt="Logo with bag and stacks of coins" />
      <h1>Investment Calculator</h1>
    </header>
  )
}