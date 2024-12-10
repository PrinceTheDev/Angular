import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RolesComponent } from './component/roles/roles.component';
import { MasterComponent } from './component/master/master.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MasterComponent, RolesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'goals';
}
