import { Component } from '@angular/core';
import { Champion } from './champion';
import { CHAMPIONS } from './champions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  champs = CHAMPIONS;
  setClass(value: string){
    switch(value) { 
      case 'jungle': { 
        return 'role--green';
      } 
      case 'top': { 
        return 'role--brown';
      } 
      default: { 
          return 'black';
      } 
    } 
  }
}
