import React from 'react';

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todaysQuote: {
        text: 'In seed time learn, in harvest teach, in winter enjoy.',
        author: 'Unknown',
      },
    };
  }

  componentDidMount() {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          todaysQuote: data[Math.floor(Math.random() * data.length)],
        });
      });
  }

  render() {
    const { todaysQuote } = this.state;
    return (
      <div className="container d-flex flex-column flex-center">
        <blockquote className="p-1">
          <p>
            {todaysQuote.text}
            {' '}
            ---
            {' '}
            {todaysQuote.author}
            {' '}
          </p>
        </blockquote>
      </div>

    );
  }
}

export default Quote;
