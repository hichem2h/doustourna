import { Component, OnInit } from '@angular/core';
import { DatabaseApiService } from '../database-api.service';
import { chapter, section, article } from 'src/Store/model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State, getAllChapters } from 'src/Store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  chapters: Observable<chapter[]>;
  selected: article[] = [];
  constructor(private api: DatabaseApiService, private store: Store<State>) { }

  ngOnInit() {
    this.api.loadChapters();
    this.chapters = this.store.select(getAllChapters);
    setInterval(() => {
      this.chapters.subscribe(val => {
        this.selected = val[0].sections[1].articles;
      })
    }, 4000)
  }
  select(sec: section) {
    this.selected = sec.articles;
  }
}
