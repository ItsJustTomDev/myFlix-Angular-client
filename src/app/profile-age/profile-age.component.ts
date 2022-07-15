import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-profile-age',
  templateUrl: './profile-age.component.html',
  styleUrls: ['./profile-age.component.scss'],
})
export class ProfileAgeComponent implements OnInit {
  user: any = {};

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public router: Router,
    public snackBar: MatSnackBar
  ) {}

  /**
   * The function is called when the component is initialized
   */
  ngOnInit(): void {
    this.getUser();
  }

  /**
   * The function getUser() is a method of the class FetchApiData. It is a public method that returns a
   * void. It subscribes to the getUser() method of the class FetchApiDataService. The getUser() method
   * of the class FetchApiDataService returns an observable of type any. The observable is assigned to
   * the variable resp. The variable resp is then assigned to the variable user. The variable user is a
   * public variable of the class FetchApiData. The variable user is then logged to the console
   */
  getUser(): void {
    this.fetchApiData.getUser().subscribe((resp: any) => {
      this.user = resp;
      console.log(this.user);
      return this.user;
    });
  }

  /**
   * The function opens a dialog box with the EditProfileComponent
   */
  openEditProfileDialog(): void {
    this.dialog.open(EditProfileComponent, {
      width: '300px',
    });
  }

  /**
   * It deletes the user's account and navigates them to the welcome page
   */
  deleteProfile(): void {
    if (
      confirm(
        'Are you sure you want to delete your account? This cannnot be undone.'
      )
    ) {
      this.router.navigate(['welcome']).then(() => {
        this.snackBar.open(
          'You have successfully deleted your account!',
          'OK',
          {
            duration: 2000,
          }
        );
      });
      this.fetchApiData.deleteUser().subscribe((result) => {
        console.log(result);
        localStorage.clear();
      });
    }
  }
}
