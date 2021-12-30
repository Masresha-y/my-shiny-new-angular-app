import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  animal = `kangaroo`;
  
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){

    alert("button was clicked ok !!!");

  }
  
  onKeyUp(keyUpEvent:any){

   console.log(keyUpEvent);
   
  }

}
