import { html, LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// @ts-ignore
@customElement('home-page')
export class HomePage extends LitElement {
  static styles = css`
    .container-home {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `;

  render() {
    return html`
      <div class="container-home">
        <h1>Open Cells</h1>
        <h2>Aprendiendo como funciona el framework</p>
      </div>
    `;
  }
}
