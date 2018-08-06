import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';


@Component({
  selector: 'app-champion-info',
  templateUrl: './champion-info.component.html',
  styleUrls: ['./champion-info.component.css', '../app.component.css']
})
export class ChampionInfoComponent implements OnInit {
  @Input() thisName: string;
  @Input() thisHistory: string;
  @Input() thisRole: string;
 
  constructor() { }

  ngOnInit() {
  }

}
