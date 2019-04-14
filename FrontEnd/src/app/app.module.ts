import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { reducers } from 'src/Store';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { DatabaseApiService } from './database-api.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { ArticleDetaillComponent } from './home/article-detaill/article-detaill.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomeComponent,
    ArticleDetaillComponent,
    QuestionsComponent,
    QuestionListComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [
    DatabaseApiService
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
