import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

message = `Bound via property binding`;


  constructor() { }

  ngOnInit(): void {
  }
  
getMessage(){

  console.log("this got called");
  return this.message;
}

}
