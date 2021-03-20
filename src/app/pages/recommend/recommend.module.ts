import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RecommendRoutingModule } from './recommend-routing.module';

import { CommonQuestionComponent } from './common-question/common-question.component';
import { NgExamComponent } from './ng-exam/ng-exam.component';
import { ExamReportComponent } from './ng-exam/report/report.component';
import { DoExamComponent } from './ng-exam/exam/exam.component';
import { ErrorListComponent } from './ng-exam/error-list/error-list.component';

const COMPONENTS_DECLARATIONS = [CommonQuestionComponent, NgExamComponent, ExamReportComponent, ErrorListComponent];
const DIRECTIVE_DECLARATIONS = [];
const COMPONENTS_ENTRY = [DoExamComponent];
@NgModule({
  imports: [SharedModule, RecommendRoutingModule],
  declarations: [COMPONENTS_DECLARATIONS, DIRECTIVE_DECLARATIONS, COMPONENTS_ENTRY],
  entryComponents: COMPONENTS_ENTRY
})
export class RecommendModule {}
