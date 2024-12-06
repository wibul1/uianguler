import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';  // นำเข้า FormsModule

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form: any = {};  // สร้างตัวแปร form
  isSignUpFailed = false;  // ตัวแปรสำหรับตรวจสอบการสมัครล้มเหลว
  errorMessage = '';  // ตัวแปรเก็บข้อความผิดพลาด

  constructor(private authService: AuthService) {}

  // ฟังก์ชัน onSubmit() ที่จะถูกเรียกเมื่อฟอร์มถูก submit
  onSubmit() {
    this.authService.register(this.form).subscribe(
      (data: any) => {
        console.log('Register successful!', data);
        this.isSignUpFailed = false;
        alert('Registration successful!');
      },
      (err: any) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        alert('Registration failed: ' + this.errorMessage);
      }
    );
  }
}
