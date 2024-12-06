import { Component } from '@angular/core';
import { AddphotoComponent } from "../addphoto/addphoto.component";
import { ShowphotoComponent } from "../showphoto/showphoto.component";

@Component({
  selector: 'app-photopage',
  standalone: true,
  imports: [AddphotoComponent, ShowphotoComponent],
  templateUrl: './photopage.component.html',
  styleUrl: './photopage.component.css'
})
export class PhotopageComponent {

}
