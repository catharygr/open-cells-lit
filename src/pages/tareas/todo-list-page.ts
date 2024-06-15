import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';

@customElement('todo-list-page')
export class TodoListPage extends LitElement {
  pageController = new PageController(this);
  @property({ type: Array }) todoList = [
    { id: 1, title: 'Task 1', description: 'Do this' },
    { id: 2, title: 'Task 2', description: 'Do that' },
  ];

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

  connectedCallback(): void {
    super.connectedCallback();
    this.pageController.subscribe('ch_todoList', (todoList: any[]) => {
      this.todoList = [
        ...todoList,
        { id: 3, title: 'Task 3', description: 'Do something else' },
      ];
    });
  }

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
