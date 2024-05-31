import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: { name: string; completed: boolean }[] = [];
  @Output() taskStatusChange = new EventEmitter<{ name: string; completed: boolean }>();

  taskStatusChanged(task: { name: string; completed: boolean }) {
    this.taskStatusChange.emit(task);
  }
}
