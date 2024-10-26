import { Component, input } from '@angular/core';

@Component({
  selector: 'app-image-stack',
  standalone: true,
  imports: [],
  templateUrl: './image-stack.component.html',
  styleUrl: './image-stack.component.css'
})
export class ImageStackComponent {
    public images = input<string[]>()
}
