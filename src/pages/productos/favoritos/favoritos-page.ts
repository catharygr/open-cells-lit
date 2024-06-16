import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';

@customElement('favoritos-page')
export class FavoritosPage extends LitElement {
  pageController = new PageController(this);

  static styles = css`
    .container-favoritos {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .productos {
      border: 1px solid #ccc;
      padding: 1rem;
      margin: 1rem;
      border-radius: 5px;
    }
    .btn-favoritos {
      padding: 0.5rem;
      border: none;
      background-color: red;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }
  `;

  @state()
  private _favoritos: any[] = [];

  connectedCallback(): void {
    super.connectedCallback();
    this.pageController.subscribe('ch_favs', (data: any[]) => {
      this._favoritos = data;
    });
  }

  removeFavorito(id: string): void {
    this._favoritos = this._favoritos.filter((favorito) => favorito.id !== id);
    this.pageController.publish('ch_favs', this._favoritos);
  }

  render() {
    return html`
      <div class="container-favoritos">
        <button @click="${() => this.pageController.backStep()}">Volver</button>
        <h1>Productos favoritos</h1>
        ${this._favoritos.map(
          (favorito) => html`
            <div class="productos">
              <h2>${favorito.title}</h2>
              <p>${favorito.description}</p>
              <button
                class="btn-favoritos"
                @click=${() => this.removeFavorito(favorito.id)}
              >
                Eliminar
              </button>
            </div>
          `
        )}
      </div>
    `;
  }
}
