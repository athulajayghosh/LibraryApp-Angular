import { Component } from '@angular/core';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent {
  deletebook=""
  delValues=()=>{
    let delbookdata:any={
      deletebook:this.deletebook
    }   
  console.log(delbookdata);
  }
}
