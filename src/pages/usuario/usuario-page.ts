import { LitElement, html, css } from 'lit';
import { customElement, queryAll, state } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';

@customElement('usuario-page')
export class UsuarioPage extends LitElement {
  controller = new PageController(this);
  @queryAll('input') _inputs!: NodeListOf<HTMLInputElement>;

  static styles = css`
    .container-usuario {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
    .form-usuario {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      border: 1px solid black;
      padding: 1rem 2rem;
    }
    .label-usuario {
      font-size: 1rem;
      margin: 0.5rem 0;
    }
    .btn-usuario {
      padding: 0.8rem 1.7rem;
      background-color: brown;
      border-radius: 0.5rem;
      color: white;
      border: none;
      cursor: pointer;
      display: block;
      margin: 1rem auto;
    }
  `;

  @state()
  private formData = {
    nombre: '',
    email: '',
    telefono: '',
  };

  @state()
  private _userData = { nombre: '', email: '', telefono: '' };

  firstUpdated() {
    this.controller.subscribe('ch_user', (data: any) => {
      this._userData = data;
    });
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this.formData = {
          ...this.formData,
          [input.name]: input.value,
        };
      });
    });
  }

  publicarDatos(e: Event) {
    e.preventDefault();
    this.controller.publish('ch_user', this.formData);
  }

  salir() {
    this.controller.updateInterceptorContext({ logueado: false });
    this.controller.navigate('home');
  }
  render() {
    return html`
      <div class="container-usuario">
        <h1>Usuario</h1>
        <h2>Por favor rellene sus datos de usuario:</h2>
        <form @submit="${this.publicarDatos}" class="form-usuario">
          <label class="label-usuario" for="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            value="${this.formData.nombre}"
          />
          <label class="label-usuario" for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value="${this.formData.email}"
          />
          <label class="label-usuario" for="telefono">Teléfono:</label>
          <input
            type="telefono"
            id="telefono"
            name="telefono"
            required
            value="${this.formData.telefono}"
          />
          <button class="btn-usuario" type="submit">Guardar</button>
        </form>
        <button class="btn-usuario" @click=${this.salir}>
          Salir y volver a home
        </button>
        <div>
          <h3>Datos guardados:</h3>
          <p>Nombre: ${this._userData?.nombre}</p>
          <p>Email: ${this._userData?.email}</p>
          <p>Teléfono: ${this._userData?.telefono}</p>
        </div>
      </div>
    `;
  }
}
