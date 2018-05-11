import { Component, OnInit, Input } from '@angular/core'
import { AppComponent } from '../app.component';

@Component({
    selector: 'post-list-item-component',
    templateUrl: './post-list-item-component.component.html',
    styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit{
   @Input() post;
   @Input() loveIts: number; 
   
    
    constructor(){

    }

    ngOnInit(){

    }
    
    onLoveIt(){
        this.loveIts++;
        console.log(this.loveIts)
    }

    onDontLoveIt(){
        this.loveIts--;
        console.log(this.loveIts)
    }
}