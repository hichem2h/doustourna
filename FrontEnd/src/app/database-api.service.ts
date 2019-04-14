import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/Store';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { chapters } from 'src/Store/Actions/chapter.Action';
import { chapter, article } from 'src/Store/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseApiService {

  baseURL = 'http://doustourna-api.herokuapp.com/api/';

  constructor(private store: Store<State>, private router: Router, public http: HttpClient) { }

  loadChapters(): any {

    this.http.get(this.baseURL + 'chapters/').subscribe(val=>{

      this.store.dispatch(new chapters(<chapter[]>val));

    })
    console.log('load Chapters called');
    this.router.navigate(['home']);
    this.store.select('doustour').subscribe(val=>console.log(val))
  }

  loadArticle(number: string): Observable<article> {

    return this.http.get<article>(this.baseURL + 'articles/' + number);
  }

  loadQuestions():Observable<any>{
    return this.http.get(this.baseURL+"questions");
  }

}
