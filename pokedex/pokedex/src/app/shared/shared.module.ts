import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { PokerHeaderComponent } from './poker-header/poker-header.component';



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PokerHeaderComponent
  ],
  declarations: [
    PokerHeaderComponent
  ]
})
export class SharedModule { }
