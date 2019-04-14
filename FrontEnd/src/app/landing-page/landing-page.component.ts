import { Component, OnInit } from '@angular/core';
import { DatabaseApiService } from '../database-api.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private api:DatabaseApiService) { }

  ngOnInit() {
  }
  goBib(){
    this.api.loadChapters();
  }
}
