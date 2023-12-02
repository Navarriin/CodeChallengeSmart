import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';
import { BehaviorSubject } from 'rxjs';
import { Location } from './types/units-response.interface';
import { GetUnitsService } from './services/get-units.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  showList = new BehaviorSubject(false);
  unitsList: Location[] = [];

  constructor(private unitService: GetUnitsService) {}

  onSubmit(): void {
    this.unitsList = this.unitService.getFilteredUnits();
    this.showList.next(true);
  }
}
