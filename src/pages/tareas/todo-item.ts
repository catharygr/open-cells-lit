import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('todo-item')
export class TodoItem extends LitElement {
  static styles = css`
    .todo-item {
      background-color: #f1f1f1;
      padding: 1rem;
      border-radius: 5px;
    }
  `;
  @property({ type: Object }) task = {};
  render() {
    return html` <div class="todo-item">${this.task}</div> `;
  }
}
