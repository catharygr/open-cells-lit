import { LitElement, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';

@customElement('input-publico-on-page')
export class InputPublicoOnPage extends LitElement {
  pageController = new PageController(this);

  @query('#nombre') _input!: HTMLInputElement;

  connectedCallback() {
    super.connectedCallback();
    this.pageController.publishOn(
      'nombre',
      this._input as HTMLElement,
      'change'
    );
    console.log('Publicando evento change en el input');
  }

  render() {
    return html`
      <h1>Input público on</h1>
      <label for="nombre">Nombre</label>
      <input id="nombre" type="text" placeholder="Nombre" />
    `;
  }
}
