import React from 'react';
import Button from './Button';
import Result from './Result';
import calculate from '../logic/calculator';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: '', next: '', operation: '' };

    this.handleCalc = this.handleCalc.bind(this);
  }

  handleCalc(event) {
    this.setState((state) => calculate(state, event.target.textContent));
  }

  render() {
    const buttons = [
      'AC', '+/-', '%', '÷',
      '7', '8', '9', 'x',
      '4', '5', '6', '-',
      '1', '2', '3', '+',
      '0', '.', '=',
    ];

    const { total, next, operation } = this.state;
    return (
      <div className="d-flex flex-column calculator">
        <Result total={total} next={next} operation={operation} />
        <div className="d-flex calculator-btns">
          {
            buttons.map((text) => (
              <Button key={text.toString()} text={text} handleCalc={this.handleCalc} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Calculator;
