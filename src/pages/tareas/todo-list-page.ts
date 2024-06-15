import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('todo-list-page')
export class TodoListPage extends LitElement {
  static styles = css`
    .container-todo-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .todo-list {
      border: 1px solid #ccc;
      padding: 1rem;
      margin: 1rem;
      border-radius: 5px;
    }
    .btn-todo-list {
      padding: 0.5rem;
      border: none;
      background-color: red;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }
  `;

  render() {
    return html`
      <div class="container-todo-list">
        <h1>Todo list</h1>
        <div class="todo-list">
          <h2>Task 1</h2>
          <p>Do this</p>
          <button class="btn-todo-list">Delete</button>
        </div>
        <div class="todo-list">
          <h2>Task 2</h2>
          <p>Do that</p>
          <button class="btn-todo-list">Delete</button>
        </div>
      </div>
    `;
  }
}
