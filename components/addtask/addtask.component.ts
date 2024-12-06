import { Component,EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; // นำเข้า CommonModule
import { FormsModule } from '@angular/forms';  // นำเข้า FormsModule
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css'
})
export class AddtaskComponent {
  @Output() bookAdded = new EventEmitter<void>();

  newtask = {title:'',category:'',description:'',datetime:'',completed:true};

  constructor(private taskService: TaskService) {}

  createBook(): void {
    this.taskService.createTask(this.newtask).subscribe((data) => {
      this.newtask = {title:'',category:'',description:'',datetime:'',completed:true}; // รีเซ็ตฟอร์ม
      this.bookAdded.emit(); // ส่งอีเวนต์เพื่อบอกว่าหนังสือถูกเพิ่มแล้ว
    });
  }
}
