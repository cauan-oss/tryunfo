const { Component } = require('react');

class Form extends Component {
  render() {
    return (
      <div>
        <label htmlFor="nome-carta">
          nome
          <input id="nome-carta" data-testid="name-input" type="text" />
        </label>
        <label htmlFor="descricao-carta">
          descricao
          <input id="descricao-carta" type="textarea" data-testid="description-input" />
        </label>
        <label htmlFor="atributo-carta1">
          attr1
          <input id="atributo-carta1" type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="atributo-carta2">
          attr2
          <input id="atributo-carta2" type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="atributo-carta3">
          attr3
          <input id="atributo-carta3" type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="entrada-img">
          imagem
          <input id="entrada-img" type="text" data-testid="image-input" />
        </label>
        <label htmlFor="raridade-cart">
          raridade
          <select data-testid="rare-input" name="" id="">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="entarda-img">
          Super trybe trunfo
          <input id="entrada-img" type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </div>
    );
  }
}

export default Form;
