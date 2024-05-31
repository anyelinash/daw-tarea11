import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: { name: string; completed: boolean }[] = [];
  filter: string = 'all'; // Declaración de la propiedad filter

  addTask(task: string) {
    this.tasks.push({ name: task, completed: false });
  }

  changeTaskStatus(task: { name: string; completed: boolean }) {
    const index = this.tasks.findIndex(t => t.name === task.name);
    if (index !== -1) {
      this.tasks[index].completed = task.completed;
    }
  }

  filterTasks(filter: string) {
    if (filter === 'completed') {
      return this.tasks.filter(task => task.completed);
    } else if (filter === 'uncompleted') {
      return this.tasks.filter(task => !task.completed);
    } else {
      return this.tasks;
    }
  }
}
