import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { CompleteLayoutComponent } from './layouts/complete-layout/complete-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CompleteLayoutComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public layout$ = new BehaviorSubject('complete');
}
