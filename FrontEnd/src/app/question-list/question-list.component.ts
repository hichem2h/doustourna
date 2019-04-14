import { Component, OnInit } from '@angular/core';
import { DatabaseApiService } from '../database-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  
  questions: Observable<any>;

  constructor(private api:DatabaseApiService) { }

  ngOnInit() {
    this.questions = this.api.loadQuestions();
  }

}
