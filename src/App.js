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
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      meuArray: [],
    };
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.name === 'cardTrunfo'
        ? event.target.checked : event.target.value,
    }, () => {
      const { cardName, cardImage,
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
      const isvalid = emptyValidate && sumValue && compara && comparaTwo;
      this.setState({
        isSaveButtonDisabled: !isvalid,
      });
    });
  };

  onSaveButtonClick = () => {
    const { cardName, cardImage, cardRare, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardTrunfo } = this.state;
    const meuObj = {
      cardName,
      cardImage,
      cardRare,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    };

    this.setState((prevstate) => {
      const meuArray = [...prevstate.meuArray, meuObj];
      return { meuArray,
        cardName: '',
        cardImage: '',
        cardRare: 'normal',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        hasTrunfo: cardTrunfo,
      };
    });
  };

  render() {
    const { cardName, cardImage, cardRare, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardTrunfo, isSaveButtonDisabled, meuArray } = this.state;

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
          onSaveButtonClick={ this.onSaveButtonClick }
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
          deleteButton={ this.onSaveButtonClick }
        />
        {meuArray.map((card) => (
          <Card
            key={ cardName }
            cardName={ card.cardName }
            cardImage={ card.cardImage }
            cardDescription={ card.cardDescription }
            cardAttr1={ card.cardAttr1 }
            cardAttr2={ card.cardAttr2 }
            cardAttr3={ card.cardAttr3 }
            cardTrunfo={ card.cardTrunfo }
            cardRare={ card.cardRare }
          />
        ))}
      </div>
    );
  }
}

export default App;
