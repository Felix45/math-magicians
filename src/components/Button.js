import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { text, handleCalc } = this.props;
    return (
      <button className="btn" type="button" onClick={handleCalc}>{ text }</button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleCalc: PropTypes.func.isRequired,
};

export default Button;
