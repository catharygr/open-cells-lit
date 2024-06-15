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
      border: 1px solid red;
    }
    .todo-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .todo-item {
      // padding: 0.5rem 1.5rem;
      border: none;
      border-radius: 5px;
      text-align: left;
    }
    .btn-todo-item {
      margin-left: 1rem;
      padding: 0.5rem 1rem;
      background-color: #f1f1f1;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  `;
  @property({ type: Object }) task: Task = { title: '' };
  @property({ type: Function }) onDelete: Function = () => {};

  render() {
    return html`
      <div class="todo-item">
        <div>
          ${this.task.title}
          <button
            class="btn-todo-item"
            @click=${() => this.onDelete(this.task)}
          >
            Eliminar
          </button>
        </div>
      </div>
    `;
  }
}
