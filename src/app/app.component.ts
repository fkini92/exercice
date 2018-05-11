import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      loveIts: 2,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      loveIts: 5,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry ',
      loveIts: -6,
      created_at: new Date()
    }
    ];
    
}
