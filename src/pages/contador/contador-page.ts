import { LitElement, html, css } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';

@customElement('contador-page')
export class ContadorPage extends LitElement {
  pageController = new PageController(this);

  static styles = css`
    .container-contador {
      background-color: pink;
      max-width: 600px;
      padding: 2rem;
      margin: 5rem auto;
    }
      .contador {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
}
  `;

  @state() private _seconds = 300;

  @state() private _start = false;

  @query('#seconds') secondsInput!: HTMLInputElement;

  startCounter() {
    this._seconds = this.secondsInput.value
      ? parseInt(this.secondsInput.value)
      : 300;
    this._start = true;
  }

  stopCounter() {
    this._start = false;
  }

  resetCounter() {
    this._start = false;
    this._seconds = 300;
    this.secondsInput.value = '300';
  }

  render() {
    return html`
      <div class="container-contador">
        <button @click="${() => this.pageController.navigate('home')}">
          Go to home page
        </button>
        <div class="contador">
          <h1>Contador</h1>
          <div>
            <label for="input-seconds">Segundos:</label>
            <input type="text" id="input-seconds" value="300" />
          </div>
          <contador-display segundos=${this._seconds} ?start=${this._start}
            >Display</contador-display
          >
          <div class="botones">
            <button @click=${this.startCounter}>Start</button>
            <button @click=${this.stopCounter}>Stop</button>
            <button @click=${this.resetCounter}>Reset</button>
          </div>
        </div>
      </div>
    `;
  }
}
