import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

const CodeTaxCalculator = () => {
  const grossIncomeRef = useRef(null);
  const taxPercentRef = useRef(null);
  const [netIncome, setNetIncome] = useState(null)

  const getNetIncome = () => {
    const grossIncome = grossIncomeRef.current?.value;
    const taxIncome = taxPercentRef.current?.value;
    const total = grossIncome * (1 - taxIncome);
    console.log('The net income is:', total);
    setNetIncome(total)
  };
  return (
    <div>
      <h3>Componente Calculator Net Income</h3>
      <label htmlFor="grossIncome">
        <p>Gross Income</p>
        <input
          type="number"
          name="grossIncome"
          id="grossIncome"
          defaultValue="0"
          min="0"
          ref={grossIncomeRef}
        />
      </label>
      <br />
      <label htmlFor="tax">
      <p>Tax to pay</p>
        <input
          type="number"
          name="tax"
          id="tax"
          defaultValue="0"
          min="0"
          max="100"
          ref={taxPercentRef}
        />
      </label>
      <br />
      <button onClick={getNetIncome}>Net income</button>
      <h4>Tu sueldo neto después de impuestos es de: {netIncome} €</h4>
    </div>
  );
};

export default CodeTaxCalculator;
