import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('todo-item')
export class TodoItem extends LitElement {
  render() {
    return `
      <div class="todo-list">
        <h2>Task 1</h2>
        <p>Do this</p>
        <button class="btn-todo-list">Delete</button>
      </div>
    `;
  }
}
