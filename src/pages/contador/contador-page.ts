import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('contador-page')
export class ContadorPage extends LitElement {
  render() {
    return html` <h1>Contador</h1> `;
  }
}
