import { Component, TemplateRef, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzModalService } from 'ng-zorro-antd/modal';
@Component({
  selector: 'do-exam',
  styleUrls: ['./exam.component.scss'],
  templateUrl: './exam.component.html'
})
export class DoExamComponent {
  @ViewChild('title') title: TemplateRef<{}>;
  @ViewChild('content') content: TemplateRef<{}>;
  @ViewChild('footer') footer: TemplateRef<{}>;
  @Input() level: number;
  show(): void {
    this.modalService.create({
      nzTitle: this.title,
      nzContent: this.content,
      nzFooter: this.footer,
      nzMaskClosable: false
    });
  }
  questions = [];
  currentIndex = 0;
  progress = 0;
  options;
  disabled = false;
  maxCurrentIndex = 0;
  start = true;
  constructor(private modalService: NzModalService, private httpClient: HttpClient) {
    setTimeout(() => {
      this.load().then(value => {
        this.questions = value;
      });
    });
  }
  radioValue;
  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      //试题难度由父组件传入
      this.httpClient.get(`../../../../assets/json/level${this.level}.json`).subscribe(value => {
        resolve(value);
      });
    });
  }
  /**
   * 记录答案,继续一下题
   * @param answer 正确答案
   */
  next(answer: string): void {
    //判断禁用状态是为了修复zorro的一个bug
    if (this.disabled === false) {
      setTimeout(() => {
        //遍历答案数组,防止答案重复
        let exist = false;
        let nextValue = false;
        this.userExamSituation.forEach((item, index) => {
          //存在记录则修改
          if (item.index === this.currentIndex) {
            item.option = this.options;
            item.answer = answer;
            exist = true;
          }
          if (item.index === this.currentIndex + 1) {
            nextValue = true;
          }
        });
        //不存在记录则新增
        if (!exist) {
          this.userExamSituation.push({
            index: this.currentIndex,
            option: this.options,
            answer: answer
          });
        }
        this.currentIndex++;
        //已经答完全部题
        if (this.currentIndex === this.questions.length) {
          this.finish = true;
          //计算分数
          let score = 0;
          const errorArray = [];
          this.userExamSituation.forEach((item, index) => {
            if (item.option === item.answer) {
              score++;
            } else {
              errorArray.push({
                index: item.index,
                errorAnswer: item.option,
                rightAnswer: item.answer
              });
            }
          });
          let discountRate;
          let levelName;
          switch (this.level) {
            case 1:
              discountRate = 0.5;
              levelName = '入门';
              break;
            case 2:
              discountRate = 0.3;
              levelName = '中级';
              break;
            case 3:
              discountRate = 0.2;
              levelName = '高级';
              break;
            default:
              break;
          }
          const gradeInfo = {
            level: levelName,
            maxNumber: this.questions.length,
            correctNumber: score,
            discountScore: Math.round(((score * 100) / this.questions.length) * discountRate),
            discountRate: '(' + discountRate * 100 + '%)',
            errorArray: errorArray
          };
          window.localStorage.setItem(`level${this.level}`, JSON.stringify(gradeInfo));
        }
        this.maxCurrentIndex = Math.max(this.maxCurrentIndex, this.currentIndex);
        this.disableNextButton();
        //存在下一题的值
        if (nextValue) {
          const obj = this.userExamSituation[this.currentIndex];
          this.options = obj.option;
        } else {
          this.options = undefined;
        }
        this.disabled = false;
        this.progress = parseInt(((this.currentIndex / this.questions.length) * 100).toFixed(0), 10);
      }, 500);
    }
    this.disabled = true;
  }
  userExamSituation = [];
  /**
   * 上一题,回退操作
   */
  preQuestion() {
    this.currentIndex--;
    const obj = this.userExamSituation[this.currentIndex];
    this.options = obj.option;
    this.progress = parseInt(((this.currentIndex / this.questions.length) * 100).toFixed(0), 10);
    this.disableNextButton();
  }
  /**
   * 下一题
   */
  nextDisabled = false;
  nextQuestion() {
    if (this.currentIndex + 1 < this.userExamSituation.length) {
      const obj = this.userExamSituation[this.currentIndex + 1];
      this.options = obj.option;
    } else {
      this.options = undefined;
    }
    this.currentIndex++;
    this.disableNextButton();
  }
  /**
   * 检测'下一题'按钮是否禁用
   */
  disableNextButton() {
    if (this.maxCurrentIndex === this.currentIndex) {
      this.nextDisabled = true;
    } else {
      this.nextDisabled = false;
    }
  }
  finish = false;
  startExam() {
    this.start = false;
  }
}
