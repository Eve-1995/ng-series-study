import { Component, ViewChild, OnInit } from '@angular/core';
import { ExamReportComponent } from './report/report.component';
import { DoExamComponent } from './exam/exam.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ErrorListComponent } from './error-list/error-list.component';
@Component({
  templateUrl: './ng-exam.component.html',
  styleUrls: ['ng-exam.component.scss']
})
export class NgExamComponent {
  @ViewChild('examLevel1') examLevel1: DoExamComponent;
  @ViewChild('examLevel2') examLevel2: DoExamComponent;
  @ViewChild('examLevel3') examLevel3: DoExamComponent;
  @ViewChild('examReport') examReport: ExamReportComponent;
  @ViewChild('errorList') errorList: ErrorListComponent;
  constructor(private messageService: NzMessageService) {}
  doExam(level: any) {
    switch (level) {
      case 1:
        this.examLevel1.show();
        break;
      case 2:
        this.examLevel2.show();
        break;
      case 3:
        this.examLevel3.show();
        break;
    }
  }
  showGradeReport() {
    const level1GradeInfo = JSON.parse(window.localStorage.getItem('level1')) || undefined;
    const level2GradeInfo = JSON.parse(window.localStorage.getItem('level2')) || undefined;
    const level3GradeInfo = JSON.parse(window.localStorage.getItem('level3')) || undefined;
    if (level1GradeInfo === undefined || level2GradeInfo === undefined || level3GradeInfo === undefined) {
      this.messageService.warning('请先完成全部试题!');
    } else {
      this.examReport.show();
    }
  }
  showErrorList() {
    this.errorList.show();
  }
}
