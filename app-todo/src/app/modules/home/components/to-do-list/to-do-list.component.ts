import { Component, DoCheck } from '@angular/core';
import { first, last } from 'rxjs';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements DoCheck{

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');
  constructor() {}

  ngDoCheck() {
   if (this.taskList) {
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
    localStorage.setItem("list", JSON.stringify(this.taskList))
   }
  }


  public setEmitTaskList(event: string) {
    this.taskList.push({
      task: event, 
      checked: false
    })
  }

  public deleteItemList(event: number) {
    this.taskList.splice(event, 1)
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Você deseja realmente apagar todos os itens da sua lista?")

    if (confirm) {
      this.taskList = []
    }
  }

  public validateInput(event: string, index: number) {
    if (!event.length) {
     const confirm = window.confirm("Task vazia. Deseja deletar?")

     if (confirm) { 
      this.deleteItemList(index)
     }
    }
  }

  public setLocalStorage() {

  }
}
