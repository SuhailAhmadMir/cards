import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Green Mountains',
      imageUrl: 'assets/c4.jpg',
      username: 'suhail mir',
      content: 'Awesome view of green fertile mountains'
    },
    {
      title: 'Mountain Climbing',
      imageUrl: 'assets/c2.jpg',
      username: 'suhail mir',
      content: 'Awesome view of top mountain range'
    },
    {
      title: 'Sunset Point',
      imageUrl: 'assets/c3.jpg',
      username: 'suhail mir',
      content: 'Awesome view of sunset'
    }
  ]
}
