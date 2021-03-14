import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { DropdownQuestion } from '../data/question-dropdown';
import { QuestionBase } from '../data/question-base';
import { TextboxQuestion } from '../data/question-textbox';

@Injectable()
export class QuestionService {
  //实际上,以下数据是从数据库拿的,这才是真的动态表单
  getQuestions() {
    const questions: QuestionBase<any>[] = [
      new DropdownQuestion({
        key: 'homePlace',
        label: '籍贯',
        options: [
          { key: '杭州', value: '杭州' },
          { key: '温州', value: '温州' },
          { key: '上虞', value: '上虞' },
          { key: '诸暨', value: '诸暨' }
        ],
        order: 3
      }),
      new TextboxQuestion({
        key: 'userName',
        label: '用户名',
        value: '前夕',
        order: 1,
        rule: [Validators.required],
        tips: ['必填']
      }),
      new TextboxQuestion({
        key: 'password',
        label: '密码',
        order: 2,
        rule: [Validators.required, Validators.minLength(6), Validators.maxLength(10)],
        tips: ['必填', '至少6个字符', '至多10个字符']
      })
    ];
    return questions.sort((a, b) => a.order - b.order); //sort是数组自带方法,用来排序
  }
  toFormGroup(questions: QuestionBase<any>[]) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = new FormControl(question.value || '', question.rule);
    });
    return new FormGroup(group);
  }
}
