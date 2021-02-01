import React, { useState } from "react";
import "./App.css";

const App = () => {
  const currencyRates = {
    EUR: 1.13,
    USD: 1.37,
    AUD: 1.79,
  };

  const [state, setState] = useState({
    currency: "USD",
    gbpAmount: 0,
    convertedCurrencyAmount: 0,
    isConverted: false,
  });
  const { currency, gbpAmount, convertedCurrencyAmount, isConverted } = state;

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setState({ ...state, [name]: value, isConverted: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const conversionRate = currencyRates[currency];
    const convertedAmount = gbpAmount * conversionRate;
    setState({
      ...state,
      convertedCurrencyAmount: convertedAmount,
      isConverted: true,
    });
  };

  return (
    <div className="App">
      <h1>Curreny Converter</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="gbpAmount">Enter GBP:</label>
        <input
          name="gbpAmount"
          type="number"
          onChange={(e) => handleChange(e)}
        ></input>
        <select name="currency" onChange={(e) => handleChange(e)}>
          <option>USD</option>
          <option>AUD</option>
          <option>EUR</option>
        </select>
        <input type="submit"></input>
      </form>
      {isConverted && (
        <div>
          Your amount is: {convertedCurrencyAmount} {currency}
        </div>
      )}
    </div>
  );
};

export default App;
