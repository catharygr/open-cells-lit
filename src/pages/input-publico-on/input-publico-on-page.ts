import { LitElement, html } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';

@customElement('input-publico-on-page')
export class InputPublicoOnPage extends LitElement {
  pageController = new PageController(this);

  @query('#nombre') _input!: HTMLInputElement;
  @state()
  private _value = '';
  @query('#apellido') _inputApellido!: HTMLInputElement;
  @state() private _valueApellido = '';

  firstUpdated() {
    this.pageController.subscribe('ch_name', (value: string) => {
      this._value = value;
    });
    this._input.addEventListener('input', () => {
      this.pageController.publish('ch_name', this._input.value);
    });
    this.pageController.subscribe('ch_apellido', (value: string) => {
      this._valueApellido = value;
    });
    this._inputApellido.addEventListener('input', () => {
      this.pageController.publish('ch_apellido', this._inputApellido.value);
    });
  }

  render() {
    return html`
      <h1>Input público on</h1>
      <label for="nombre">Nombre</label>
      <input id="nombre" type="text" placeholder="Nombre" />
      <label for="apellido">Apellido</label>
      <input id="apellido" type="text" placeholder="Apellido" />
      <p>Valor Apellido: ${this._valueApellido}</p>
      <p>Valor: ${this._value}</p>
    `;
  }
}
