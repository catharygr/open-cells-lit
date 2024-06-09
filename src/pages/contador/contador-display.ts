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

  @property({ type: Number })
  tiempo: number = 300;
  intervalId: any = null;
  tiempoInicial: number = this.tiempo;

  get horas() {
    return Math.floor(this.tiempo / 3600);
  }

  get minutos() {
    return Math.floor((this.tiempo % 3600) / 60);
  }

  get segundos() {
    return this.tiempo % 60;
  }

  startCountdown() {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      if (this.tiempo > 0) {
        this.tiempo--;
      } else {
        this.stopCountdown();
      }
    }, 1000);
  }

  stopCountdown() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  resetCountdown() {
    this.stopCountdown();
    this.tiempo = this.tiempoInicial;
  }

  render() {
    return html`
      <div class="display">
        <div id="horas" class="horas">${this.horas}</div>
        :
        <div id="minutos" class="minutos">${this.minutos}</div>
        :
        <div id="segundos">${this.segundos}</div>
      </div>
    `;
  }
}
