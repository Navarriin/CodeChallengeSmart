import { Component, Input } from '@angular/core';
import { Location } from '../../types/units-response.interface';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss',
})
export class CardsListComponent {
  @Input() unitsList: Location[] = [];

  constructor() {}
}
