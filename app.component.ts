import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router'; // นำเข้า Router
import { AuthService } from './auth.service'; // นำเข้า AuthService

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // แก้ไขจาก styleUrl เป็น styleUrls (เป็น array)
})
export class AppComponent {
  title = 'testrout';

  constructor(private authService: AuthService, private router: Router) {} // Inject AuthService และ Router

  // ฟังก์ชันสำหรับการออกจากระบบ
  logout() {
    this.authService.logout();  // เรียกฟังก์ชัน logout ใน AuthService (ต้องสร้างใน AuthService ด้วย)
    this.router.navigate(['/login']);  // นำผู้ใช้ไปยังหน้า login
  }
}
