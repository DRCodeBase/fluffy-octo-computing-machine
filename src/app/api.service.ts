import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const OPEN_LIBRARY = environment.openLibrary;

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  // Get Book Data
  getBookDetails(isbn) {
    return this.http.get(OPEN_LIBRARY + '?bibkeys=ISBN:' + isbn + '&format=json&jscmd=data');
  }

}
