import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './forbidden-name.directive';
import { Anchor } from 'src/app/libs/content-fill/content-fill.interface';

@Component({
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.scss']
})
export class ValidationFormComponent implements OnInit {
  anchor: Anchor[] = [
    {
      href: '#template-validation',
      title: '模板驱动验证'
    },
    {
      href: '#reactive-validation',
      title: '自定义验证器'
    },
    {
      href: '#custom-validator',
      title: '响应式表单',
      children:[
        {
            href: '#custom-reactive-validation',
            title: '响应式表单'
        },
        {
          href: '#custom-template-validation',
          title: '模板驱动表单'
        }
      ]
    }
  ];
  demo1Value;
  code1 = `
    <form>
        <input name="name" [(ngModel)]="demo1Value" #demo1="ngModel" nz-input placeholder="值必填且不能少于4个字符多于6个字符" required minlength="4"
            maxlength="6">
        <div *ngIf="demo1.invalid && (demo1.dirty || demo1.touched)">
            <div *ngIf="demo1.errors.required">
                值不能为空
            </div>
            <div *ngIf="demo1.errors.minlength">
                值不能少于4个字符
            </div>
        </div>
    </form>
    `;
  demo2Group: FormGroup;
  demo3Group: FormGroup;
  ngOnInit() {
    this.demo2Group = new FormGroup({
      //FormControl构造函数有两个参数,第一个参数为初始值,第二个参数为数组格式的验证条件
      demo2Value: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(6)])
    });
    this.demo3Group = new FormGroup({
      demo3Value: new FormControl('', [Validators.required, forbiddenNameValidator('Eve')])
    });
  }
  get demo2Value() {
    return this.demo2Group.get('demo2Value');
  } //返回指定的FormControl
  get demo3Value() {
    return this.demo3Group.get('demo3Value');
  } //返回指定的FormControl
  code2 = `
    get func() { return this.value }
    `;
  code3 = `
    <form [formGroup]="demo2Group">
    <!-- formControlName的值demo2Value指的是FormControl,后文的demo2Value都是指数据源中的函数.一般同名处理 -->
        <input formControlName="demo2Value" nz-input placeholder="值必填且不能少于4个字符多于6个字符">
        <div *ngIf="demo2Value.invalid && (demo2Value.dirty || demo2Value.touched)">
            <div *ngIf="demo2Value.errors.required">
                值不能为空
            </div>
            <div *ngIf="demo2Value.errors.minlength">
                值不能少于4个字符
            </div>
            <div *ngIf="demo2Value.errors.maxlength">
                值不能多于6个字符
            </div>
        </div>
    </form>
    `;
  code4 = `
    import { FormGroup, FormControl, Validators } from '@angular/forms';
    demo2Group: FormGroup;
    ngOnInit() {
        this.demo2Group = new FormGroup({
            //FormControl构造函数有两个参数,第一个参数为初始值,第二个参数为数组格式的验证条件
            'demo2Value': new FormControl(null, [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(6),
            ])
        });
    }
    get demo2Value() { return this.demo2Group.get('demo2Value'); }//返回指定的FormControl
    `;
  code5 = `
    import { AbstractControl, NG_VALIDATORS, ValidatorFn } from '@angular/forms';
    /**
     * 禁用名字验证器
     * @param value 需要验证的值
     */
    export function forbiddenNameValidator(value: string): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const rule = new RegExp(value,'i');//设定验证规则,i是忽略大小写的意思
            const result = rule.test(control.value);//control.value是输入框的值,forbidden是正则结果
            return result ? { 'forbiddenName': { value: control.value } } : null;//如果匹配成功,则返回对象
        };
    }
    `;
  code6 = `
    <form [formGroup]="demo3Group">
        <input formControlName="demo3Value" nz-input placeholder="值必填且不能包含字符'Eve'">
        <div *ngIf="demo3Value.invalid && (demo3Value.dirty || demo3Value.touched)">
            <div *ngIf="demo3Value.errors.required">
                值不能为空
            </div>
            <div *ngIf="demo3Value.errors.forbiddenName">
                值不能包含'Eve'
            </div>
        </div>
    </form>
    `;
  code7 = `
    import { forbiddenNameValidator } from './forbidden-name.directive';
    demo3Group: FormGroup;
    ngOnInit() {
        this.demo3Group = new FormGroup({
            'demo3Value': new FormControl('', [
                Validators.required,
                forbiddenNameValidator('Eve')
            ])
        });
    }
    get demo3Value() { return this.demo3Group.get('demo3Value'); }//返回指定的FormControl
    `;
  code8 = `
    import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
    @Directive({
        selector: '[appForbiddenName]',
        providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true }]
    })
    export class ForbiddenValidatorDirective implements Validator {
        @Input('appForbiddenName') forbiddenName: string;

        validate(control: AbstractControl): { [key: string]: any } | null {
            //执行数据检验并返回结果
        }
    }
    `;
  code9 = `
    import { Directive, Input } from '@angular/core';
    import { AbstractControl, NG_VALIDATORS, ValidatorFn, Validator } from '@angular/forms';
    
    /**
     * 禁用名字验证器
     * @param value 需要验证的值
     */
    export function forbiddenNameValidator(value: string): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const rule = new RegExp(value,'i');//设定验证规则,i是忽略大小写的意思
            const result = rule.test(control.value);//control.value是输入框的值,forbidden是正则结果
            return result ? { 'forbiddenName': { value: control.value } } : null;//如果匹配成功,则返回对象
        };
    }
    
    @Directive({
        selector: '[appForbiddenName]',
        providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true }]
    })
    export class ForbiddenValidatorDirective implements Validator {
        @Input('appForbiddenName') forbiddenName: string;
    
        validate(control: AbstractControl): { [key: string]: any } | null {
            return this.forbiddenName ? forbiddenNameValidator(this.forbiddenName)(control)
                : null;
        }
    }
    `;
  demo4Value;
  code10 = `
    <form>
        <input name="name" [(ngModel)]="demo4Value" #demo5="ngModel" nz-input placeholder="值必填且不能包含字符'Eve'" required appForbiddenName="Eve"
            maxlength="6">
        <div *ngIf="demo5.invalid && (demo5.dirty || demo5.touched)">
            <div *ngIf="demo5.errors.required">
                值不能为空
            </div>
            <div *ngIf="demo5.errors.forbiddenName">
                值不能包含'Eve'
            </div>
        </div>
    </form>
    `;
}
