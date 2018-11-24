import { Component, TemplateRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { NzModalService, NzModalRef } from 'ng-zorro-antd';
@Component({
  selector: 'exam-report',
  styleUrls: ['./report.component.less'],
  templateUrl: './report.component.html',
})
export class ExamReportComponent {
  @ViewChild('title') title: TemplateRef<{}>;
  @ViewChild('content') content: TemplateRef<{}>;
  @Output() event = new EventEmitter<any>();
  modal: NzModalRef;
  score;
  spinBoolean = true;
  show(): void {
    const level1GradeInfo = JSON.parse(window.localStorage.getItem('level1')) || undefined;
    const level2GradeInfo = JSON.parse(window.localStorage.getItem('level2')) || undefined;
    const level3GradeInfo = JSON.parse(window.localStorage.getItem('level3')) || undefined;
    this.dataSet = [];
    this.dataSet.push(level1GradeInfo);
    this.dataSet.push(level2GradeInfo);
    this.dataSet.push(level3GradeInfo);
    this.score = level1GradeInfo.discountScore + level2GradeInfo.discountScore + level3GradeInfo.discountScore;
    this.modal = this.modalService.create({
      nzTitle: this.title,
      nzContent: this.content,
      nzFooter: null,
      nzMaskClosable: false
    });
    setTimeout(() => {
      this.spinBoolean = false;
    }, 1500);
  }
  constructor(
    private modalService: NzModalService
  ) {
  }
  showErrorList() {
    this.event.emit(null);
    this.modal.destroy();
  }
  close() {
    this.modal.destroy();
  }
  dataSet = [];
}
