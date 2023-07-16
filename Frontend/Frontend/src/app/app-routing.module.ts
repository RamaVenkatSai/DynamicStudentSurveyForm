import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CancelComponent } from './cancel/cancel.component';
import { DisplayComponent } from './display/display.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  {path: 'display', component: DisplayComponent},
{path: '', component: HomepageComponent},
{path: 'cancel', component: CancelComponent},
{path: 'survey', component: SurveyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
