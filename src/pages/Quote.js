import React from 'react';

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todaysQuote: '',
    };
  }

  componentDidMount() {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => {
        const quoteNumber = Math.floor(Math.random() * data.length);
        this.setState({
          todaysQuote: data[quoteNumber],
        });
      });
  }

  render() {
    const { todaysQuote } = this.state;
    return (
      <blockquote>
        <p>{todaysQuote.text}</p>
        <p>{todaysQuote.author}</p>
      </blockquote>
    );
  }
}

export default Quote;
