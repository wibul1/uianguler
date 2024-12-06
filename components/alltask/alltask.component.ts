import { Component,OnInit  } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common'; // นำเข้า CommonModule
import { FormsModule } from '@angular/forms';
import { TaskitemComponent } from "../taskitem/taskitem.component";
import { AddtaskComponent } from "../addtask/addtask.component";

@Component({
  selector: 'app-alltask',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskitemComponent, AddtaskComponent],
  templateUrl: './alltask.component.html',
  styleUrl: './alltask.component.css'
})
export class AlltaskComponent implements OnInit {
  urgentTasks: any[] = [];
  notUrgentTasks: any[] = [];
  laterTasks: any[] = [];
  isAddTaskModalOpen = false; // ตัวแปรสถานะป๊อปอัพ

  openAddTaskModal() {
    this.isAddTaskModalOpen = true;
  }

  closeAddTaskModal() {
    this.isAddTaskModalOpen = false;
  }

  constructor(private taskService: TaskService) {}


  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getAllTask().subscribe(tasks => {
      this.urgentTasks = tasks.filter(task => task.category === 'ด่วน');
      this.notUrgentTasks = tasks.filter(task => task.category === 'ไม่รีบ');
      this.laterTasks = tasks.filter(task => task.category === 'จะทำแต่ไว้ก่อน');
    });
  }

  


}
