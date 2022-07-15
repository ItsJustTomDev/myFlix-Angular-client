import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DirectorComponent } from '../director/director.component';
import { FetchApiDataService } from '../fetch-api-data.service';
import { GenreComponent } from '../genre/genre.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];
  favoriteMovies: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  /**
   * The ngOnInit() function is a lifecycle hook that is called after Angular has initialized all
   * data-bound properties of a directive
   */
  ngOnInit(): void {
    this.getMovies();
  }

  /**
   * The function getMovies() is a function that calls the getAllMovies() function from the fetchApiData
   * service, which returns an observable of type any. The observable is then subscribed to, and the
   * response is assigned to the movies variable
   */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  /**
   * This function is called in the ngOnInit() function and it calls the getFavoriteMovies() function in
   * the fetchApiData service. The getFavoriteMovies() function returns an observable of type any. The
   * observable is subscribed to and the response is assigned to the favoriteMovies variable
   */
  getFavoriteMovies(): void {
    this.fetchApiData.getFavoriteMovies().subscribe((resp: any) => {
      this.favoriteMovies = resp;
      console.log(this.favoriteMovies);
      return this.favoriteMovies;
    });
  }

  /**
   * If the id is in the array of favorite movies, return true, otherwise return false
   * @param {string} id - string - The id of the movie we want to check if it's in our favorite list.
   * @returns A boolean value.
   */
  isFav(id: string): boolean {
    return this.favoriteMovies.includes(id);
  }

  /**
   * This function opens a dialog box with the GenreComponent as the content
   * @param {string} name - string - The name of the genre.
   * @param {string} description - string - The description of the genre.
   */
  openGenreDialog(name: string, description: string): void {
    this.dialog.open(GenreComponent, {
      data: {
        Name: name,
        Description: description,
      },
      width: '500px',
    });
  }

  /**
   * "Open a dialog box with the DirectorComponent, and pass in the name, bio, and birthday of the
   * director."
   *
   * The first line of the function is the function declaration. It's a function that takes in three
   * parameters: name, bio, and birthday. The name and bio parameters are strings, and the birthday
   * parameter is a Date
   * @param {string} name - string - The name of the director
   * @param {string} bio - string - The director's biography
   * @param {Date} birthday - Date
   */
  openDirectorDialog(name: string, bio: string, birthday: Date): void {
    this.dialog.open(DirectorComponent, {
      data: {
        Name: name,
        Bio: bio,
        Birthday: birthday,
      },
      width: '500px',
    });
  }

  /**
   * The function takes in an id as a parameter, and then calls the addFavoriteMovie function from the
   * fetchApiData service, which returns an observable. The observable is then subscribed to, and the
   * result is logged to the console
   * @param {string} id - string - The id of the movie that is being added to the favorite list.
   */
  addToFavoriteMovies(id: string): void {
    console.log(id);
    this.fetchApiData.addFavoriteMovie(id).subscribe((result) => {
      console.log(result);
      this.ngOnInit();
    });
  }

  /**
   * The function takes in an id as a parameter, and then calls the removeFavoriteMovie function from the
   * fetchApiData service, which then calls the deleteFavoriteMovie function from the api.service.ts file
   * @param {string} id - string - The id of the movie that we want to remove from our favorite movies.
   */
  removeFromFavoriteMovies(id: string): void {
    console.log(id);
    this.fetchApiData.removeFavoriteMovie(id).subscribe((result) => {
      console.log(result);
      this.ngOnInit();
    });
  }
}
