import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';

@customElement('favoritos-page')
export class FavoritosPage extends LitElement {
  pageController = new PageController(this);

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
      <h1>Favoritos</h1>
      ${this._favoritos.map(
        (favorito) => html`
          <div>
            <h2>${favorito.title}</h2>
            <p>${favorito.description}</p>
            <button @click=${() => this.removeFavorito(favorito.id)}>
              Eliminar
            </button>
          </div>
        `
      )}
    `;
  }
}
