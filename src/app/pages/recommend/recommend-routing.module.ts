import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonQuestionComponent } from './common-question/common-question.component';

const routes: Routes = [
  { path: 'common-question', component: CommonQuestionComponent },
  // { path: 'ng-exam', component: NgExamComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommendRoutingModule {}
