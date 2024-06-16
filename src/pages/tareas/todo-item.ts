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
      justify-content: space-between;
      align-items: center;
      width: 100%;
      border: 1px solid red;
      border-radius: 5px;
      padding: 0 1rem;
      background-color: #f1f1f1;
      box-sizing: border-box;
    }

    .btn-todo-item {
      padding: 0.5rem 1rem;
      background-color: red;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      color: white;
    }
  `;
  @property({ type: Object }) task: Task = { title: '' };
  @property({ type: Function }) onDelete: Function = () => {};

  render() {
    return html`
      <div class="todo-item">
        <p>${this.task.title}</p>
        <button class="btn-todo-item" @click=${() => this.onDelete(this.task)}>
          Eliminar
        </button>
      </div>
    `;
  }
}
