import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: any = {};  // เก็บข้อมูลฟอร์ม login
  isLoginFailed = false;  // ตัวแปรสำหรับตรวจสอบการเข้าสู่ระบบล้มเหลว
  errorMessage = '';  // เก็บข้อความผิดพลาด

  constructor(private authService: AuthService,  private router: Router) {}

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
  

  // ฟังก์ชัน onSubmit สำหรับเข้าสู่ระบบ
  onSubmit() {
    this.authService.login(this.form).subscribe({
      next: (data) => {
        console.log('Login successful!', data);
        this.authService.saveToken(data.token);  // เก็บ token ใน localStorage
        this.isLoginFailed = false;
        this.router.navigate(['/home']);  // นำทางไปหน้า home
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        alert('Login failed: ' + this.errorMessage);
      }
    });
  }
  
}
