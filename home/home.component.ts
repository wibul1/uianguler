import { Component } from '@angular/core';
import { GetapiComponent } from "../getapi/getapi.component";
import { AddbookComponent } from "../addbook/addbook.component";
import { CommonModule } from '@angular/common'; // นำเข้า CommonModule
import { FormsModule } from '@angular/forms';  // นำเข้า FormsModule


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GetapiComponent, AddbookComponent,CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isAddBookModalOpen = false; // ตัวแปรสถานะป๊อปอัพ

  openAddBookModal() {
    this.isAddBookModalOpen = true;
  }

  closeAddBookModal() {
    this.isAddBookModalOpen = false;
  }
}
