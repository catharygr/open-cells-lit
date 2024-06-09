import { LitElement, html, css } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';

@customElement('contador-display')
export class ContadorDisplay extends LitElement {
  render() {
    return html` <p>Display</p> `;
  }
}
