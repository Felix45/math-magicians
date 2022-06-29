import React from 'react';
import PropTypes from 'prop-types';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { total, next, operation } = this.props;
    const result = `${total || operation || next ? `${total || ''} ${operation || ''} ${next || ''}` : 0}`;
    return (
      <div className="bg-dark d-flex flex-end p-1">
        {result}
      </div>
    );
  }
}

Result.defaultProps = {
  total: 0,
  next: '',
  operation: '',
};

Result.propTypes = {
  total: PropTypes.number,
  next: PropTypes.string,
  operation: PropTypes.string,
};

export default Result;
