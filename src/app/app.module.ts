import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Meus components
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderComponent, FormsComponent, CardsListComponent],
  exports: [HeaderComponent, FormsComponent, CardsListComponent],
})
export class AppModule {}
