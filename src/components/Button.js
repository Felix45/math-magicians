import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { text } = this.props;
    return (
      <span className="btn">{ text }</span>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
