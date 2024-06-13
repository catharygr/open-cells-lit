import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';
import '@material/mwc-icon';

@customElement('header-component')
export class HeaderComponent extends LitElement {
  pageController = new PageController(this);
  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: pink;
      color: white;
      padding: 2rem;
    }

    img {
      width: 2rem;
      height: 2rem;
    }
    a {
      color: white;
      text-decoration: none;
      margin: 0 0.5rem;
      font-size: 2rem;
    }
    a:hover {
      text-decoration: underline;
    }
    mwc-icon {
      display: none;
    }
    .menu {
      display: none;
      position: relative;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1000;
      padding: 2rem;
      box-sizing: border-box;
      overflow: auto;
      transform: translateX(100%);
      transition: transform 0.3s ease-out;
    }

    .menu.open {
      display: block;
      transform: translateX(0);
    }

    .menu .close {
      display: block;
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
    }

    .menu.open mwc-icon {
      display: block;
    }

    .menu.open mwc-icon:first-child {
      display: none;
    }
    // .menu.open .close {
    //   display: block;
    // }

    .menu ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .menu ul li {
      margin-bottom: 1rem;
    }

    .menu input {
      width: 100%;
      padding: 0.5rem;
      font-size: 1rem;
    }
    mwc-icon {
      display: block;
      font-size: 2rem;
    }
    @media (max-width: 48rem) {
      header {
        justify-content: space-between;
      }
      a {
        font-size: 1.5rem;
        text-align: center;
      }
      mwc-icon:first-child {
        position: absolute;
        left: 2rem;
      }
      mwc-icon:last-child {
        position: absolute;
        right: 2rem;
      }
    }
  `;

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.requestUpdate();
  }

  @property({ type: Boolean }) isOpen = false;
  @state() private _name = '';

  connectedCallback(): void {
    super.connectedCallback();
    this.pageController.publish('ch_favoritos', []);
    this.pageController.subscribe('ch_name', (value: string) => {
      this._name = value;
    });
  }

  render() {
    return html`
      <header>
        <a
          href="/"
          @click="${(e: Event) => {
            e.preventDefault();
            this.pageController.navigate('home');
          }}"
        >
          <img
            class="img-open-cells"
            src="/images/favicon.svg"
            alt="Open Cells"
          />
          Open Cells: ${this._name}</a
        >
        <mwc-icon @click="${this.toggleMenu}">menu</mwc-icon>
      </header>
      <div class="menu ${this.isOpen ? 'open' : ''}">
        <mwc-icon class="close" @click="${this.toggleMenu}">close</mwc-icon>
        <ul>
          <li>
            <a
              href="/productos"
              @click="${(e: Event) => {
                e.preventDefault();
                this.pageController.navigate('productos');
              }}"
              >Go to productos page</a
            >
          </li>
          <li>
            <a
              href="/contador"
              @click="${(e: Event) => {
                e.preventDefault();
                this.pageController.navigate('contador');
              }}"
            >
              Go to contador page</a
            >
          </li>
          <li>
            <a
              href="/usuario"
              @click="${(e: Event) => {
                e.preventDefault();
                this.pageController.navigate('usuario');
              }}"
            >
              Go to usuario page</a
            >
          </li>
          <li>
            <a
              href="/usuario"
              @click="${(e: Event) => {
                e.preventDefault();
                this.pageController.navigate('login');
              }}"
            >
              Go to login page</a
            >
          </li>
          <li>
            <a
              href="/input-publico-on"
              @click="${(e: Event) => {
                e.preventDefault();
                this.pageController.navigate('input-publico-on');
              }}"
            >
              Go to publico on page</a
            >
          </li>
        </ul>
      </div>
    `;
  }
}
