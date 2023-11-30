import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Meus components
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderComponent, FormsComponent],
  exports: [HeaderComponent, FormsComponent],
})
export class AppModule {}
