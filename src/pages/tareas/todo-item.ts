import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface Task {
  title: string;
}

@customElement('todo-item')
export class TodoItem extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .todo-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      // width: 100%;
      // border: 1px solid #ccc;
      // padding: 10px;
      // margin-top: 10px;
    }
    button {
      // margin-left: 10px;
    }
  `;
  @property({ type: Object }) task: Task = { title: '' };
  @property({ type: Function }) onDelete: Function = () => {};

  render() {
    return html`
      <div class="todo-item">
        <div>
          ${this.task.title}
          <button @click=${() => this.onDelete(this.task)}>Eliminar</button>
        </div>
      </div>
    `;
  }
}
