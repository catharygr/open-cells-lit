import { html, LitElement, css } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement, state } from 'lit/decorators.js';

// @ts-ignore
@customElement('home-page')
export class HomePage extends LitElement {
  pageController = new PageController(this);

  static styles = css`
    .container-home {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin 5rem auto;
    }
  `;

  @state()
  private _value = '';

  connectedCallback(): void {
    super.connectedCallback();
    this.pageController.subscribe('ch_name', (value: string) => {
      this._value = value;
    });
  }

  render() {
    return html`
      <div class="container-home">
        <h1>Home Page</h1>
        <p>El valor del input: ${this._value}</p>
      </div>
    `;
  }
}
