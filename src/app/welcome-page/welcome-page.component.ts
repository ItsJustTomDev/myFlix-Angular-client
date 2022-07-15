import { Component, OnInit } from '@angular/core';

import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  /**
   * The function opens a dialog box with the UserRegistrationFormComponent component
   */
  openUserRegister(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '280px',
    });
  }

  /**
   * The openUserLogin() function opens the UserLoginFormComponent in a dialog box
   */
  openUserLogin(): void {
    this.dialog.open(UserLoginFormComponent, {
      width: '280px',
    });
  }
}
