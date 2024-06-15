import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('contador-display')
export class ContadorDisplay extends LitElement {
  static styles = css`
    .display {
      display: flex;
      justify-content: center;
      font-size: 4rem;
      margin: 1rem;
      color: red;
    }
  `;

  @property({ type: Boolean })
  start?: boolean = false;
  @property({ type: Number, reflect: true })
  segundos?: number;
  private _intervalId?: number;

  @state()
  private _horas: number = 0;
  @state()
  private _minutos: number = 0;
  @state()
  private _segundos: number = 0;

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('start')) {
      if (this.start) {
        this.starCounter();
      } else {
        this.stopCounter();
      }
    }
    if (changedProperties.has('segundos')) {
      this._horas = Math.floor(this.segundos! / 3600);
      this._minutos = Math.floor((this.segundos! % 3600) / 60);
      this._segundos = Math.floor(this.segundos! % 60);
    }
  }

  starCounter() {
    this._intervalId = setInterval(() => {
      this.segundos = (this.segundos ?? 0) - 1;
      this._horas = Math.floor(this.segundos / 3600);
      this._minutos = Math.floor((this.segundos % 3600) / 60);
      this._segundos = Math.floor(this.segundos % 60);
    }, 1000);
  }

  stopCounter() {
    if (this._intervalId !== undefined) {
      window.clearInterval(this._intervalId);
      this._intervalId = undefined;
    }
  }

  render() {
    return html`
      <div class="display">
        <div id="horas" class="horas">${this._horas}</div>
        :
        <div id="minutos" class="minutos">${this._minutos}</div>
        :
        <div id="segundos">${this._segundos}</div>
      </div>
    `;
  }
}
