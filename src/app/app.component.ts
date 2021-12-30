import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

   // providers: [DataService]
})
export class AppComponent {

  title = " Angular 13";

  counter =0;

  classToSet = 'positive'; 
 
  onCounterChange(buttonType:any){

   buttonType === 'INC' ? this.counter++: this.counter --; 
   this.classToSet = this.counter >= 0 ?'positive':'negative';
    
  }
}

