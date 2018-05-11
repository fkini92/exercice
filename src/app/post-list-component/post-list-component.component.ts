import { Component, OnInit, Input} from '@angular/core'
import { AppComponent } from '../app.component';

@Component({
    selector: 'post-list-component',
    templateUrl: './post-list-component.component.html',
    styleUrls: ['post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {
    title = 'POSTS';
    posts = [];    
    constructor(app:AppComponent){
        this.posts = app.posts
    }

    ngOnInit() {
        
    }
  
      
}