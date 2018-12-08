import { Component, OnInit } from '@angular/core';
import { LigthServiceService } from '../ligth-service.service';

@Component({
  selector: 'app-ligth',
  templateUrl: './ligth.component.html',
  styleUrls: ['./ligth.component.scss']
})
export class LigthComponent implements OnInit {
  private response : any;

  constructor(private service: LigthServiceService) { }

  ngOnInit() {
  }

  public turnOn(){
    this.service.turnOn().subscribe(data => {
      this.response = data;
    })
  }
}