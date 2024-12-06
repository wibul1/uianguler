import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PhotopageComponent } from './photopage/photopage.component';
import { AlltaskComponent } from './components/alltask/alltask.component';
import { AuthGuard } from './auth.guard';  // นำเข้า AuthGuard

export const routes: Routes = [
    { path: 'index', component: IndexComponent, canActivate: [AuthGuard]},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'photo', component: PhotopageComponent },
    { path: 'task', component: AlltaskComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }

];
