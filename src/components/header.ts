import { LitElement, html, css } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';
import '@material/mwc-icon';
import '@material/web/iconbutton/outlined-icon-button.js';
import '@material/web/icon/icon.js';
import '@material/web/textfield/outlined-text-field.js';

@customElement('header-component')
export class HeaderComponent extends LitElement {
  pageController = new PageController(this);
  @query('.menu') _menu!: HTMLElement;
  @query('.close') _close!: HTMLElement;

  static styles = css`
    :host {
      --background-color: #333;
      --text-color: #fff;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--background-color);
      color: var(--text-color);
      padding: 2rem;
    }
    .img-open-cells {
      width: 2rem;
      height: 2rem;
    }

    a {
      color: white;
      text-decoration: none;
      margin: 0 0.5rem;
      font-size: 2rem;
      text-align: left;
    }
    a:hover {
      text-decoration: underline;
    }
    mwc-icon {
      display: none;
    }
    .menu {
      display: none;
      position: fixed;
      top: 0;
      right: 0;
      width: 33.33%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
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
      top: 2rem;
      right: 2rem;
      cursor: pointer;
    }

    .menu.open mwc-icon {
      display: block;
    }

    .menu.open .close {
      display: block;
    }

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
    .use-name {
      margin-left: auto;
      margin-right: 2rem;
      font-size: 1.5rem;
      margin-block: 0;
      padding: 0;
    }
    .dark-mode {
      display: flex;
      justify-content: center;
      margin-left: 1rem;
      padding: 0;
    }
    .search {
      width: 100%;
      max-width: 20rem;
      margin: 1rem auto;
      padding: 0.5rem;
    }

    @media (max-width: 48rem) {
      header {
        flex-direction: column;
      }
      a {
        font-size: 1.5rem;
        text-align: center;
        margin: 0.2rem 0;
      }
      .menu {
        width: 100%;
        padding: 1rem;
      }

      .menu ul li {
        margin-bottom: 0.5rem;
      }
      .img-open-cells {
        width: 1.5rem;
        height: 1.5rem;
      }
      .use-name {
        margin-right: 1rem;
        margin-left: 0;
      }
      .dark-mode {
        margin-left: 0;
      }
    }
  `;

  private _updateTheme() {
    const mode = document.documentElement.getAttribute('data-theme') || 'light';
    if (mode === 'dark') {
      this.style.setProperty('--background-color', '#333');
      this.style.setProperty('--text-color', '#fff');
    } else {
      this.style.setProperty('--background-color', 'pink');
      this.style.setProperty('--text-color', '#fff');
    }
  }

  private _toggleDarkMode() {
    const mode = document.documentElement.getAttribute('data-theme') || 'light';
    if (mode === 'light') {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
    this._updateTheme();
  }

  @property({ type: Boolean }) isOpen = false;
  @state() private _userNombre = '';
  @state() private _search = '';

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.requestUpdate();
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._updateTheme();
    this.pageController.publish('ch_favoritos', []);
    this.pageController.subscribe('ch_user', (data: any) => {
      this._userNombre = data.nombre;
    });
  }
  firstUpdated() {
    const links = this._menu.querySelectorAll('a');
    links.forEach((link) => {
      link.addEventListener('click', () => {
        this.toggleMenu();
      });
    });
  }

  handleSearch(e: Event) {
    e.preventDefault();
    const searchProduct = (e.target as HTMLInputElement).value;
    this.pageController.publish('ch_search', searchProduct);
    this._search = searchProduct;
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
          Open Cells</a
        >

        <md-outlined-icon-button
          class="dark-mode"
          aria-label="Dark Mode"
          data-mode="light"
          toggle
          @click=${() => this._toggleDarkMode()}
        >
          <md-icon><img src="/images/dark_mode.png" /></md-icon>
          <md-icon slot="selected"
            ><img clase="icon-light" src="/images/light_mode.png"
          /></md-icon>
        </md-outlined-icon-button>
        <md-outlined-text-field
          class="search"
          label="Buscar producto"
          .value="${this._search}"
          @input="${(e: Event) => this.handleSearch(e)}"
        ></md-outlined-text-field>

        <p class="use-name">Hola ${this._userNombre}</p>
        <mwc-icon @click="${this.toggleMenu}">menu</mwc-icon>
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
              >
                Productos</a
              >
            </li>
            <li>
              <a
                href="/favoritos"
                @click="${(e: Event) => {
                  e.preventDefault();
                  this.pageController.navigate('favoritos');
                }}"
              >
                Favoritos</a
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
                Contador</a
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
                Usuario</a
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
                Login</a
              >
            </li>
            <li>
              <a
                href="/tareas"
                @click="${(e: Event) => {
                  e.preventDefault();
                  this.pageController.navigate('tareas');
                }}"
              >
                Tareas</a
              >
            </li>
            <li>
              <a
                href="/not-found"
                @click="${(e: Event) => {
                  e.preventDefault();
                  this.pageController.navigate('not-found');
                }}"
              >
                Not found</a
              >
            </li>
          </ul>
        </div>
      </header>
    `;
  }
}
