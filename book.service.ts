import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:8080/api/books'; // URL ของ API

  constructor(private http: HttpClient) {}

  // GET: Get all books
  getAllBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // POST: Create a new book
  createBook(book: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, book);
  }

  // GET: Get a book by ID
  getBookById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  // PUT: Update a book
  updateBook(id: string, bookDetails: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, bookDetails);
  }

  // DELETE: Delete a book
  deleteBook(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
