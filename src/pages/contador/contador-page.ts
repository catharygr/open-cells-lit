import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
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
  render() {
    return html`
      <div class="container-contador">
        <button @click="${() => this.pageController.navigate('home')}">
          Go to home page
        </button>
        <div class="contador">
          <h1>Contador</h1>
          <div>
            <label>Segundos:</label>
            <input type="text" id="seconds" />
          </div>
          <contador-display segundos="10" play>Display</contador-display>
          <div class="botones"></div>
        </div>
      </div>
    `;
  }
}
