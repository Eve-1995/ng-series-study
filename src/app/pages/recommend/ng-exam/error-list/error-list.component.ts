import { Observable } from 'rxjs';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NzModalService, NzModalRef } from 'ng-zorro-antd';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'error-list',
  styleUrls: ['./error-list.component.less'],
  templateUrl: './error-list.component.html',
})
export class ErrorListComponent {
  @ViewChild('title') title: TemplateRef<{}>;
  @ViewChild('content') content: TemplateRef<{}>;
  @ViewChild('footer') footer: TemplateRef<{}>;
  modal: NzModalRef;
  level1Question: any;
  level2Question: any;
  level3Question: any;
  level1GradeInfo;
  level2GradeInfo;
  level3GradeInfo;
  level1Data = [];
  level2Data = [];
  level3Data = [];
  spinBoolean = true;
  constructor(
    private httpClient: HttpClient,
    private modalService: NzModalService
  ) {
  }
  show(): void {
    this.modal = this.modalService.create({
      nzTitle: this.title,
      nzContent: this.content,
      nzFooter: this.footer,
      nzMaskClosable: false
    });
    this.level1Question = [];
    this.level2Question = [];
    this.level3Question = [];
    this.level1Data = [];
    this.level2Data = [];
    this.level3Data = [];
    //取出题库
    const getLevelQuestion = Observable.create(observer => {
      this.httpClient.get(`../../../../assets/json/level1.json`).subscribe(v1 => {
        this.level1Question = v1;
        this.httpClient.get(`../../../../assets/json/level2.json`).subscribe(v2 => {
          this.level2Question = v2;
          this.httpClient.get(`../../../../assets/json/level3.json`).subscribe(v3 => {
            this.level3Question = v3;
            observer.next(null);
          });
        });
      });
    });
    //取出答题情况
    const getLevelGradeInfo = Observable.create(observer => {
      this.level1GradeInfo = JSON.parse(window.localStorage.getItem('level1'));
      this.level2GradeInfo = JSON.parse(window.localStorage.getItem('level2'));
      this.level3GradeInfo = JSON.parse(window.localStorage.getItem('level3'));
      observer.next(null);
    });

    getLevelQuestion.subscribe(() => {
      getLevelGradeInfo.subscribe(() => {
        //整合数据
        this.level1Question.forEach((item1, index1) => {
          this.level1GradeInfo.errorArray.forEach(item2 => {
            if (item2.index === index1) {
              this.level1Data.push({
                question: item1.question,
                optionA: item1.optionA,
                optionB: item1.optionB,
                optionC: item1.optionC,
                optionD: item1.optionD,
                errorAnswer: item2.errorAnswer,
                rightAnswer: item2.rightAnswer
              });
            }
          });
        });
        this.level2Question.forEach((item1, index1) => {
          this.level2GradeInfo.errorArray.forEach(item2 => {
            if (item2.index === index1) {
              this.level2Data.push({
                question: item1.question,
                optionA: item1.optionA,
                optionB: item1.optionB,
                optionC: item1.optionC,
                optionD: item1.optionD,
                errorAnswer: item2.errorAnswer,
                rightAnswer: item2.rightAnswer
              });
            }
          });
        });
        this.level3Question.forEach((item1, index1) => {
          this.level3GradeInfo.errorArray.forEach(item2 => {
            if (item2.index === index1) {
              this.level3Data.push({
                question: item1.question,
                optionA: item1.optionA,
                optionB: item1.optionB,
                optionC: item1.optionC,
                optionD: item1.optionD,
                errorAnswer: item2.errorAnswer,
                rightAnswer: item2.rightAnswer
              });
            }
          });
        });
        this.spinBoolean = false;
      });
    });
  }
  close() {
    this.modal.close();
  }
}
