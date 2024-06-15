import { LitElement, html, css } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';
import './contador-display.ts';

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

      .container-contador button {
        padding: 0.5rem 1rem;
        background-color: #f1f1f1;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      .contador {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
      .input-contador {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 40px;
      }
      .botones {
        display: flex;
        justify-content: center;
        gap: 1rem;
      }
      .btn-contador {
        padding: 0.5rem 1rem;
        background-color: #f1f1f1;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
}
  `;

  @state() private _seconds = 300;

  @state() private _start = false;

  @query('#input-seconds') secondsInput!: HTMLInputElement;

  startCounter() {
    // @ts-ignore
    this._seconds = this.secondsInput.value;
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
            <input
              class="input-contador"
              type="number"
              id="input-seconds"
              value="300"
            />
          </div>
          <contador-display segundos=${this._seconds} ?start=${this._start}
            >Display</contador-display
          >
          <div class="botones">
            <button class="btn-contador" @click=${this.startCounter}>
              Start
            </button>
            <button class="btn-contador" @click=${this.stopCounter}>
              Stop
            </button>
            <button class="btn-contador" @click=${this.resetCounter}>
              Reset
            </button>
          </div>
        </div>
      </div>
    `;
  }
}
