import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';
import './todo-item';

@customElement('todo-list-page')
export class TodoListPage extends LitElement {
  pageController = new PageController(this);
  @property({ type: Array }) tasks: Task[] = [];

  static styles = css`
    .form-todo {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      marrgin: 5rem;
    }
    // .todo-list {
    //   display: flex;
    //   justify-content: center;
    //   gap: 1rem;
    // }
    form {
      display: flex;
      gap: 1rem;
    }
    input {
      flex: 1;
    }
    .todo-item {
      display: flex;
      flex-direction: column;

      padding: 1rem;
      border-radius: 5px;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.pageController.subscribe('add_task', (task: Task) => {
      this.tasks = [...this.tasks, task];
    });
  }

  handleDelete(task: Task) {
    this.tasks = this.tasks.filter((t) => t !== task);
  }

  handleAddTask(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const task = { title: formData.get('name') as string };
    this.pageController.publish('add_task', task);
    form.reset();
  }

  render() {
    return html`
      <div class="todo-list">
        <form class="form-todo" @submit=${this.handleAddTask}>
          <input name="name" placeholder="Nombre de la tarea" required />
          <button type="submit">Agregar tarea</button>
        </form>
        ${this.tasks.map(
          (task) =>
            html`<todo-item
              class="todo-item"
              .task=${task}
              .onDelete=${() => this.handleDelete(task)}
            ></todo-item>`
        )}
      </div>
    `;
  }
}
