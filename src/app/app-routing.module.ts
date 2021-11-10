import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EndpageComponent } from './endpage/endpage.component';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path: "home", component:HomeComponent},
  {path:"question/:id", component:QuestionsComponent},
  {path:"finish/:id", component:EndpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
