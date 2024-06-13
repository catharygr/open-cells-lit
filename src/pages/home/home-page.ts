import { html, LitElement } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement, state } from 'lit/decorators.js';
// import '../../components/header.ts';

// @ts-ignore
@customElement('home-page')
export class HomePage extends LitElement {
  pageController = new PageController(this);

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    // @ts-ignore
    return this;
  }

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
      <h1>Home Page</h1>
      <p>El valor del input: ${this._value}</p>
    `;
  }
}
