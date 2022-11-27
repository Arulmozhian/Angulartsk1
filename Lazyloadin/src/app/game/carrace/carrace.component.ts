import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrace',
  templateUrl: './carrace.component.html',
  styleUrls: ['./carrace.component.css']
})
export class CarraceComponent implements OnInit {
  selected: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }
  show(){
    if(this.selected == false){
      this.selected = true;
      Swal.fire(
        'item added to your cart'
      )
      
    }else{
      this.selected = false;
      
    }}
}
