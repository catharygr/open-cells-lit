import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('footer-component')
export class FooterComponent extends LitElement {
  static styles = css`
    :host {
      --background-color: #333;
      --text-color: #fff;
    }
    footer {
      display: flex;
      justify-content: center;
      background-color: var(--background-color);
      color: var(--text-color);
      padding: 2rem;
    }
    footer p {
      margin: 0;
      font-weight: bold;
    }
    footer a {
      color: var(--text-color);
      text-decoration: none;
    }
    footer a:hover {
      text-decoration: underline;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this._updateTheme();
    const observer = new MutationObserver(() => this._updateTheme());
    observer.observe(document.documentElement, { attributes: true });
  }

  _updateTheme() {
    const mode = document.documentElement.getAttribute('data-theme') || 'light';
    if (mode === 'dark') {
      this.style.setProperty('--background-color', '#333');
      this.style.setProperty('--text-color', '#fff');
    } else {
      this.style.setProperty('--background-color', 'pink');
      this.style.setProperty('--text-color', '#000');
    }
  }

  render() {
    console.log('Rendering footer');
    return html`
      <footer>
        <p>
          &copy; ${new Date().getFullYear()} Open Cells by
          <a href="https://bubulazi.com/">Bubulazi</a>
        </p>
      </footer>
    `;
  }
}
