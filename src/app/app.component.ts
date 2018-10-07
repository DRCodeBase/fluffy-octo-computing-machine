import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Book } from './models/book';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // Initialize variables
  cover = '';
  title = '';
  bookService;

  // Constructor
  constructor(
    apiService: ApiService
  ) {
    this.bookService = apiService;
  }

  // Get current isbn book information from service.
  findBook(isbn) {
    this.bookService.getBookDetails(isbn.target.value).subscribe((data) => {
      console.log(data['ISBN:' + isbn.target.value])
      this.cover = data['ISBN:' + isbn.target.value].cover.large;
      this.title = data['ISBN:' + isbn.target.value].title;
      isbn.target.value = '';
    });
  }

}
