import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';
import './todo-item';

interface Task {
  title: string;
}

@customElement('todo-list-page')
export class TodoListPage extends LitElement {
  pageController = new PageController(this);
  @property({ type: Array }) tasks: Task[] = [];

  static styles = css`
    .todo-list {
      display: flex;
      flex-direction: column;
      margin: 5rem auto;
      width: 50%;
      height: 50vh;
      border: 10px solid #ccc;
      padding: 2rem;
      background-color: pink;
      border-radius: 5px;
    }
    input,
    button {
      padding: 0.5rem 1.5rem;
      border: none;
      border-radius: 5px;
      text-align: left;
    }
    .form-todo {
      align-self: center;
      margin-bottom: 1rem;
    }
    @media (max-width: 48rem) {
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
        <div>
          ${this.tasks.map(
            (task) =>
              html`<todo-item
                .task=${task}
                .onDelete=${() => this.handleDelete(task)}
              ></todo-item>`
          )}
        </div>
      </div>
    `;
  }
}
