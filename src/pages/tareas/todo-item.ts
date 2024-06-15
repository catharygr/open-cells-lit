import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface Todo {
  title: string;
  description: string;
}

@customElement('todo-item')
export class TodoItem extends LitElement {
  @property({ type: Array }) todoList: Todo[] = [];
  render() {
    return html`
      <div class="todo-list">
        ${this.todoList.map(
          (todo: Todo) => html`
            <h2>${todo.title}</h2>
            <p>${todo.description}</p>
            <button class="btn-todo-list">Delete</button>
          `
        )}
      </div>
    `;
  }
}
