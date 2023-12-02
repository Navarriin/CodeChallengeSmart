import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Meus components
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { LegendComponent } from './components/legend/legend.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    FormsComponent,
    CardsListComponent,
    LegendComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    FormsComponent,
    CardsListComponent,
    LegendComponent,
    FooterComponent,
  ],
})
export class AppModule {}
