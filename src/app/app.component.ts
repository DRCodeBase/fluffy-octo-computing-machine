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
  cover = '';
  bookService;

  constructor(
    apiService: ApiService
  ) {
    this.bookService = apiService;
  }

  findBook(isbn) {
    this.bookService.getBookDetails(isbn.target.value).subscribe((data) => {
      console.log(data['ISBN:' + isbn.target.value])
      this.cover = data['ISBN:' + isbn.target.value].cover.large;
      isbn.target.value = '';
    });
  }

}
