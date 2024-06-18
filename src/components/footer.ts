import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('footer-component')
export class FooterComponent extends LitElement {
  render() {
    return `
      <footer>
        <p>&copy; ${new Date().getFullYear()} Open Cells</p>
      </footer>
    `;
  }
}
