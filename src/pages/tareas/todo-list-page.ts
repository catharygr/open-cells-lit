import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';
import './todo-item';

interface Task {
  name: string;
  description: string;
}

@customElement('todo-list-page')
export class TodoListPage extends LitElement {
  pageController = new PageController(this);
  @property({ type: Array }) tasks: Task[] = [];

  static styles = css`
    .todo-list {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.pageController.subscribe('add_task', (task: Task) => {
      this.tasks = [...this.tasks, task];
    });
  }
  render() {
    return html`
      ${this.tasks.map((task) => html`<todo-item .task=${task}></todo-item>`)}
    `;
  }
}
