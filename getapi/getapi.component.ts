import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-getapi',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './getapi.component.html',
  styleUrls: ['./getapi.component.css']
})
export class GetapiComponent implements OnInit {
  books: any[] = [];
  selectedBook: any = null;
  updatedBook = { id: '', title: '', author: '', price: 0, category: '', image: '' };
  isUpdateModalOpen = false;
  isDetailsModalOpen = false; // เพิ่มตัวแปรนี้

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  // เปิดป๊อปอัพแสดงรายละเอียด
  openDetailsModal(bookId: string): void {
    this.getBookById(bookId);
    this.isDetailsModalOpen = true;
  }

  // ปิดป๊อปอัพแสดงรายละเอียด
  closeDetailsModal(): void {
    this.isDetailsModalOpen = false;
    this.selectedBook = null;
  }

  // GET a book by ID
  getBookById(id: string): void {
    this.bookService.getBookById(id).subscribe((data) => {
      this.selectedBook = data;
    });
  }

  // GET all books
  getBooks(): void {
    this.bookService.getAllBooks().subscribe((data) => {
      this.books = data;
    });
  }

  openUpdateModal(book: any) {
    this.isUpdateModalOpen = true;
    this.updatedBook = { ...book };
  }

  closeUpdateModal() {
    this.isUpdateModalOpen = false;
  }

  submitUpdate() {
    this.updateBook(this.updatedBook); 
    this.closeUpdateModal();
  }

  updateBook(book: any): void {
    this.bookService.updateBook(book.id, book).subscribe(() => {
      this.getBooks();
      this.updatedBook = { id: '', title: '', author: '', price: 0, category: '', image: '' };
    });
  }

  deleteBook(id: string): void {
    this.bookService.deleteBook(id).subscribe(() => {
      this.books = this.books.filter(book => book.id !== id);
    });
  }
}
