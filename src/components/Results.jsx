import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({ investments }) {

  const results = calculateInvestmentResults(investments);

  function deriveFullResults(results) {
    const fullData = [];
    let totalInterest = 0;
    let investedCapital = investments.initialInvestment;
    for (const result of results) {
      totalInterest += result.interest;
      investedCapital += investments.annualInvestment;
      const fullYear = {
        ...result,
        totalInterest: totalInterest,
        investedCapital: investedCapital,
      };
      fullData.push(fullYear);
    }

    return fullData;
  }

  const fullResults = deriveFullResults(results);
  // console.log(fullResults);

  function displayInvestmentResult(year) {
    return <tr key={year.year}>
      <th scope="row">{year.year}</th>
      <th scope="row">{formatter.format(year.valueEndOfYear)}</th>
      <th scope="row">{formatter.format(year.interest)}</th>
      <th scope="row">{formatter.format(year.totalInterest)}</th>
      <th scope="row">{formatter.format(year.investedCapital)}</th>
    </tr>
  }

  return (
    <table id="result">
      <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Investment Value</th>
          <th scope="col">Interest (Year)</th>
          <th scope="col">Total Interest</th>
          <th scope="col">Invested Capital</th>
        </tr>
      </thead>
      <tbody>

        {fullResults.map(year => displayInvestmentResult(year))}

      </tbody>
    </table>
  );
}