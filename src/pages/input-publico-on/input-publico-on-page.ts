import { LitElement, html } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';

@customElement('input-publico-on-page')
export class InputPublicoOnPage extends LitElement {
  pageController = new PageController(this);

  @query('#nombre') _input!: HTMLInputElement;
  @state()
  private _value = '';

  firstUpdated() {
    this.pageController.subscribe('ch_name', (value: string) => {
      this._value = value;
    });
    this._input.addEventListener('input', () => {
      this.pageController.publish('ch_name', this._input.value);
    });
  }

  render() {
    return html`
      <h1>Input público on</h1>
      <label for="nombre">Nombre</label>
      <input id="nombre" type="text" placeholder="Nombre" />
      <p>Valor: ${this._value}</p>
    `;
  }
}
