import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface Task {
  title: string;
}

@customElement('todo-item')
export class TodoItem extends LitElement {
  static styles = css`
    .todo-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #f1f1f1;
      padding: 1rem;
      border-radius: 5px;
    }
    button {
      margin: 1rem;
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
