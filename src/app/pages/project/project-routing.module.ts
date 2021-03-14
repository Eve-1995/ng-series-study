import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroductionComponent } from './introduction/introduction.component';
import { AuthorComponent } from './author/author.component';

const routes: Routes = [
  { path: 'introduction', component: IntroductionComponent },
  { path: 'author', component: AuthorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}
