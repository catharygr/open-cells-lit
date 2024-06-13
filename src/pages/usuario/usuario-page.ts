import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';

@customElement('usuario-page')
export class UsuarioPage extends LitElement {
  controller = new PageController(this);

  static styles = css`
    .container-usuario {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin 3rem auto;
      }
    .btn-usuario {
     
      padding: 0.8rem 1.7rem;
      background-color: brown;
      border-radius: 0.5rem;
      color: white;
      border: none;
      cursor: pointer;
    }
      
      
      `;

  salir() {
    this.controller.updateInterceptorContext({ logueado: false });
    this.controller.navigate('home');
  }
  render() {
    return html`
      <div class="container-usuario">
        <h1>Usuario</h1>
        <button class="btn-usuario" @click=${this.salir}>
          Salir y volver a home
        </button>
      </div>
    `;
  }
}
