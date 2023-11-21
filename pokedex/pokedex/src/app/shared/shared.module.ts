import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { PokerHeaderComponent } from './poker-header/poker-header.component';
import { PokerSearchComponent } from './poker-search/poker-search.component';
import { PokerListComponent } from './poker-list/poker-list.component';



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PokerHeaderComponent,
    PokerSearchComponent,
    PokerListComponent
  ],
  declarations: [
    PokerHeaderComponent,
    PokerSearchComponent,
    PokerListComponent
  ]
})
export class SharedModule { }
