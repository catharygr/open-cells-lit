import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('not-found-page')
export class NotFoundPage extends LitElement {
  render() {
    return html`
      <h1>404</h1>
      <p>Page not found</p>
    `;
  }
}
