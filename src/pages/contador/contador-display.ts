import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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
  segundos?: number;

  render() {
    console.log(this.segundos);
    return html`
      <div class="display">
        <div id="horas" class="horas">00</div>
        :
        <div id="minutos" class="minutos">00</div>
        :
        <div id="segundos">00</div>
      </div>
    `;
  }
}
