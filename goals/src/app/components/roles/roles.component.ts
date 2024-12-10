import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  //string, number, date, boolean, array, object, null, undefined

  firstname: string = "Angular Tutorial";
  angularVersion = "Version 18";

  version: number = 18;

  isActive: boolean = false;

  currentDate : Date = new Date();

  inputType: string = "button";
  selectedState: string = "";


  showWelcomeAlert () {
    alert("Welcome to Goals App")
  }
  showMessage(message: string) {
    alert(message)
  }



}
