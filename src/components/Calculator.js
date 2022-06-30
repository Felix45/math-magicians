import React, { useState } from 'react';
import Button from './Button';
import Result from './Result';
import calculate from '../logic/calculator';

const Calculator = () => {
  const [calc, setCalc] = useState({ total: '', next: '', operation: '' });
  const { total, next, operation } = calc;

  const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const handleCalc = (event) => {
    setCalc({ ...calc, ...calculate(calc, event.target.textContent) });
  };

  return (
    <div className="d-flex flex-column calculator">
      <Result total={total} next={next} operation={operation} />
      <div className="d-flex calculator-btns">
        {
          buttons.map((text) => (
            <Button key={text.toString()} text={text} handleCalc={handleCalc} />
          ))
        }
      </div>
    </div>
  );
};

export default Calculator;
