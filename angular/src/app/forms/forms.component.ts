import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit{

  public listFoods: Array<{food: string, preco: number}> = [
    {food: "X-salada", preco: 23.90},
    {food: "X-Bacon", preco: 23.90},
    {food: "X-Egg", preco: 23.90},
  ];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public submitForm(form: NgForm) {
    if(form.valid) {
      console.log(form.value)
    }
  }

}
