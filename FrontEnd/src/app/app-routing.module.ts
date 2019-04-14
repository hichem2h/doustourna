import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { ArticleDetaillComponent } from './home/article-detaill/article-detaill.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { TestComponent } from './test/test.component';



const routes: Routes = [
  { path: 'landingPage', component: LandingPageComponent },
  { path: 'questions', component: QuestionListComponent },
  { path: 'test', component: TestComponent },
  { path: 'questions/post', component: QuestionsComponent },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'article/:number', component: ArticleDetaillComponent },
      { path: '**', redirectTo: '' }
    ]
  },
  { path: '**', redirectTo: 'landingPage', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
