import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardImage: '',
      cardRare: 'normal',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardTrunfo: true,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }, () => {
      const { cardName, cardImage, cardRare,
        cardDescription, cardAttr1, cardAttr2, cardAttr3 } = this.state;

      const emptyValidate = cardName.length > 0
      && cardImage.length > 0 && cardDescription.length > 0;
      const valueMax = 210;
      const sumValue = Number(cardAttr1) + Number(cardAttr2)
      + Number(cardAttr3) <= valueMax;
      const valueMaxTwo = 90;
      const zero = 0;
      const card1 = Number(cardAttr1);
      const card2 = Number(cardAttr2);
      const card3 = Number(cardAttr3);
      const compara = card1 <= valueMaxTwo && card2 <= valueMaxTwo
      && card3 <= valueMaxTwo;
      const comparaTwo = card1 >= zero && card2 >= zero && card3 >= zero;
      console.log(comparaTwo);
      const isvalid = emptyValidate && sumValue && compara && comparaTwo;
      this.setState({
        isSaveButtonDisabled: !isvalid,
      });
    });
  };

  render() {
    const { cardName, cardImage, cardRare, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardTrunfo, isSaveButtonDisabled } = this.state;

    return (
      <div>
        <h1>Adicione nova carta</h1>
        <Form
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardTrunfo={ cardTrunfo }
          cardRare={ cardRare }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardTrunfo={ cardTrunfo }
          cardRare={ cardRare }
        />
      </div>
    );
  }
}

export default App;
