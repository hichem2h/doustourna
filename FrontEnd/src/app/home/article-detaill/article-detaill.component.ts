import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { article } from 'src/Store/model';
import { DatabaseApiService } from 'src/app/database-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-detaill',
  templateUrl: './article-detaill.component.html',
  styleUrls: ['./article-detaill.component.css']
})
export class ArticleDetaillComponent implements OnInit {

  art: Observable<article>;

  constructor(private activatedRoute: ActivatedRoute,private dataApi : DatabaseApiService) { }

  ngOnInit() {
    let snap = this.activatedRoute.snapshot;
    this.art = this.dataApi.loadArticle(snap.paramMap.get('number'));
  }

}
