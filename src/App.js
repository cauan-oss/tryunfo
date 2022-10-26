import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
    };
  }

  onInputChange = (event) => {
    console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { cardName } = this.state;

    return (
      <div>
        <h1>Adicione nova carta</h1>
        <Form cardName={ cardName } onInputChange={ this.onInputChange } />
        <Card cardName={ cardName } />
      </div>
    );
  }
}

export default App;
