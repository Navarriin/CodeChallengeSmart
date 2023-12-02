import { Component, Input } from '@angular/core';
import { Location } from '../../types/units-response.interface';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss',
})
export class CardsListComponent {
  @Input() unitsList: Location[] = [];

  constructor() {}
}
