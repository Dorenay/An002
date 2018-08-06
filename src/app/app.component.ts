import { Component } from '@angular/core';
import { CHAMPIONS } from './champions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  champs = CHAMPIONS;
  

}
