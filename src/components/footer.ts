import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('footer-component')
export class FooterComponent extends LitElement {
  static styles = css`
    footer {
      display: flex;
      justify-content: center;
      background-color: var(--background-color);
      color: var(--text-color);
      padding: 2rem;

      & p {
        margin: 0;
        font-weight: bold;
      }
    }
  `;
  render() {
    return html`
      <footer>
        <p>&copy; ${new Date().getFullYear()} Open Cells by Bubulazi</p>
      </footer>
    `;
  }
}
