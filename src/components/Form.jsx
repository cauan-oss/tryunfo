import PropTypes from 'prop-types';

const { Component } = require('react');

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <div>
        <label htmlFor="nome-carta">
          nome
          <input
            id="nome-carta"
            data-testid="name-input"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            type="text"
          />
        </label>
        <label htmlFor="descricao-carta">
          descricao
          <input
            id="descricao-carta"
            type="textarea"
            data-testid="description-input"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="atributo-carta1">
          attr1
          <input
            id="atributo-carta1"
            type="number"
            data-testid="attr1-input"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="atributo-carta2">
          attr2
          <input
            id="atributo-carta2"
            type="number"
            data-testid="attr2-input"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="atributo-carta3">
          attr3
          <input
            id="atributo-carta3"
            type="number"
            data-testid="attr3-input"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="entrada-img">
          imagem
          <input
            id="entrada-img"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            name="cardImage"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="raridade-cart">
          raridade
          <select
            data-testid="rare-input"
            value={ cardRare }
            name="cardRare"
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="entrada-img">
          Super trybe trunfo
          { cardTrunfo ? <p data-testid="trunfo-card">
          Você já tem um Super Trunfo em seu baralho 
          </p> : <input
            checked={ cardTrunfo }
            onChange={ onInputChange }
            name="cardTrunfo"
            id="entrada-img"
            type="checkbox"
            data-testid="trunfo-input"
          /> }

        </label>
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="button"
          data-testid="save-button"
        >
          Salvar

        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
