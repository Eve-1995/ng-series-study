import { Component, OnInit } from '@angular/core';

import { QuestionBase } from './data/question-base';
import { QuestionService } from './service/question.service';
import { FormGroup } from '@angular/forms';

@Component({
  providers: [QuestionService],
  styleUrls: ['./dynamic-form.component.scss'],
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {
  questions: QuestionBase<any>[] = [];

  constructor(private questionService: QuestionService) {
    this.questions = questionService.getQuestions();
  }
  form: FormGroup;
  payLoad = '';

  ngOnInit() {
    this.form = this.questionService.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
  code1 = `
    export class QuestionBase<T> {
        value: T;//默认值
        key: string;//标记关键字
        label: string;//显示的名字
        order: number;//序号
        controlType: string;//控件类型
        rule:Array<T>;//验证规则
        tips:Array<string>;
    
        constructor(options: {
            value?: T,
            key?: string,
            label?: string,
            required?: boolean,
            order?: number,
            controlType?: string
            rule?:Array<T>,
            tips?:Array<string>
        } = {}) {
            this.value = options.value;
            this.key = options.key || '';
            this.label = options.label || '';
            this.order = options.order === undefined ? 1 : options.order;
            this.controlType = options.controlType || '';
            this.rule = options.rule || [];
            this.tips = options.tips || [];
        }
    }    
    `;
  code2 = `
    import { QuestionBase } from './question-base';

    export class DropdownQuestion extends QuestionBase<string> {
        controlType = 'dropdown';//指定类型为下拉框
        options: { key: string, value: string }[] = [];//下拉框的选项

        constructor(options: {} = {}) {
            super(options);
            this.options = options['options'] || [];
        }
    }
    `;
  code3 = `
    import { QuestionBase } from './question-base';

    export class TextboxQuestion extends QuestionBase<string> {
        controlType = 'textbox';//指定类型为输入框

        constructor(options: {} = {}) {
            super(options);
        }
    }
    `;
  code4 = `
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
                        { key: '诸暨', value: '诸暨' },
                    ],
                    order: 3
                }),
                new TextboxQuestion({
                    key: 'userName',
                    label: '用户名',
                    value: '前夕',
                    order: 1,
                    rule: [
                        Validators.required
                    ],
                    tips:['必填']
                }),
                new TextboxQuestion({
                    key: 'password',
                    label: '密码',
                    order: 2,
                    rule: [
                        Validators.required,
                        Validators.minLength(6),
                        Validators.maxLength(10),
                    ],
                    tips:['必填','至少6个字符','至多10个字符']
                })
            ];
            return questions.sort((a, b) => a.order - b.order);//sort是数组自带方法,用来排序
        }
        toFormGroup(questions: QuestionBase<any>[]) {
            const group: any = {};
    
            questions.forEach(question => {
                group[question.key] = new FormControl(question.value || '', question.rule);
            });
            return new FormGroup(group);
        }
    }    
    `;
  code5 = `
    <div [formGroup]="form">
        <label [attr.for]="question.key">{{question.label}}</label>
        <span style="color:red;" *ngFor="let obj of question.tips">
            {{obj}}
        </span>
        <div [ngSwitch]="question.controlType">

            <input nz-input *ngSwitchCase="'textbox'" [formControlName]="question.key" [id]="question.key" [type]="question.type">

            <nz-select style="width: 120px;" nzAllowClear [id]="question.key" *ngSwitchCase="'dropdown'" [formControlName]="question.key">
                <nz-option *ngFor="let opt of question.options" [nzValue]="opt.key" [nzLabel]="opt.value"></nz-option>
            </nz-select>
            
        </div>
    </div>
    `;
  code6 = `
    import { Component, Input } from '@angular/core';
    import { FormGroup } from '@angular/forms';

    import { QuestionBase } from '../data/question-base';

    @Component({
        selector: 'show-question',
        templateUrl: './show-question.component.html'
    })
    export class ShowQuestionComponent {
        @Input() question: QuestionBase<any>;
        @Input() form: FormGroup;
        get isValid() { return this.form.controls[this.question.key].valid; }
    }
    `;
  code7 = `
    <form (ngSubmit)="onSubmit()" [formGroup]="form">

        <div *ngFor="let question of questions">
            <show-question [question]="question" [form]="form"></show-question>
        </div>

        <div>
            <button type="submit" nz-button nzType="primary" [disabled]="!form.valid">提交</button>
        </div>
    </form>

    <div *ngIf="payLoad">
        <strong>保存的数据如下</strong>
        <br>{{payLoad}}
    </div>
    `;
  code8 = `
    questions: QuestionBase<any>[] = [];

    constructor(
        private questionService: QuestionService) {
        this.questions = questionService.getQuestions();
    }
    form: FormGroup;
    payLoad = '';


    ngOnInit() {
        this.form = this.questionService.toFormGroup(this.questions);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
    `;
}
