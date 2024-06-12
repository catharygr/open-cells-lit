import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';

@customElement('login-page')
export class LoginPage extends LitElement {
  controller = new PageController(this);
  render() {
    return html`
      <h1>Login page</h1>
      <button @click=${() => this.controller.navigate('home')}>Loguear</button>
    `;
  }
}
