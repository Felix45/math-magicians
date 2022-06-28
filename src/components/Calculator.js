import React from 'react';
import Button from './Button';
import Result from './Result';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const buttons = [
      'AC', '+/-', '%', '/',
      '7', '8', '9', 'x',
      '4', '5', '6', '-',
      '1', '2', '3', '+',
      '0', '.', '=',
    ];

    return (
      <div className="d-flex flex-column calculator">
        <Result />
        <div className="d-flex calculator-btns">
          {buttons.map((text) => <Button key={0} text={text} />)}
        </div>
      </div>
    );
  }
}

export default Calculator;
