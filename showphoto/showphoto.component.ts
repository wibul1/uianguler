import { Component,OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-showphoto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './showphoto.component.html',
  styleUrl: './showphoto.component.css'
})
export class ShowphotoComponent implements OnInit {
  photo: any[] = [];

   constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.getPhoto();
  }

  getPhoto(): void {
    this.photoService.getAllPhotos().subscribe((data) => {
      this.photo = data;
    });
  }
}
