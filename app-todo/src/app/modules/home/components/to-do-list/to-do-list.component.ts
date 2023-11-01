import { Component, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
    {task: "Minha nova Task", checked: true},
    {task: "Minha nova Task 2", checked: false},
  ];
  constructor() {}

  ngOnInit(): void {}

  public deleteItemList(event: number) {
    this.taskList.splice(event, 1)
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Você deseja realmente apagar todos os itens da sua lista?")

    if (confirm) {
      this.taskList = []
    }
  }


}
