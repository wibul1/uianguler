import { Component, EventEmitter, Output } from '@angular/core';
import { BookService } from '../book.service'; // นำเข้า BookService
import { CommonModule } from '@angular/common'; // นำเข้า CommonModule
import { FormsModule } from '@angular/forms';  // นำเข้า FormsModule

@Component({
  selector: 'app-addbook',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
  @Output() bookAdded = new EventEmitter<void>(); // Event Emitter สำหรับบอกให้ปิดป๊อปอัพ

  newBook = { title: '', author: '', price: 0, category: '', image: '' };

  constructor(private bookService: BookService) {}

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.newBook.image = reader.result as string; // เก็บ Base64 ของรูปภาพ
      };
      reader.readAsDataURL(file);
    }
  }

  createBook(): void {
    this.bookService.createBook(this.newBook).subscribe((data) => {
      this.newBook = { title: '', author: '', price: 0, category: '', image: '' }; // รีเซ็ตฟอร์ม
      this.bookAdded.emit(); // ส่งอีเวนต์เพื่อบอกว่าหนังสือถูกเพิ่มแล้ว
    });
  }
}
