import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';

@customElement('login-page')
export class LoginPage extends LitElement {
  controller = new PageController(this);

  static styles = css` 
    .container-login {
      display: flex;  
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin 5rem auto;
      }
      .btn-login {
        padding: 0.5rem 1rem;
        background-color: purple;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin: 0.5rem;
      }
      
      
      `;

  loguearUsuario() {
    this.controller.updateInterceptorContext({ logueado: true });
    this.controller.navigate('usuario');
  }
  loguearProducto() {
    this.controller.updateInterceptorContext({ logueado: true });
    this.controller.navigate('productos');
  }
  render() {
    return html`
      <div class="container-login">
        <h1>Login page</h1>
        <button class="btn-login" @click=${this.loguearUsuario}>
          Loguear usuario
        </button>
        <button class="btn-login" @click=${this.loguearProducto}>
          Loguear producto
        </button>
      </div>
    `;
  }
}
