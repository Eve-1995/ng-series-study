import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidatorFn, Validator } from '@angular/forms';

/**
 * 禁用名字验证器
 * @param value 需要验证的值
 */
export function forbiddenNameValidator(value: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const rule = new RegExp(value, 'i'); //设定验证规则,i是忽略大小写的意思
    const result = rule.test(control.value); //control.value是输入框的值,forbidden是正则结果
    return result ? { forbiddenName: { value: control.value } } : null; //如果匹配成功,则返回对象
  };
}

@Directive({
  selector: '[appForbiddenName]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true }]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input('appForbiddenName') forbiddenName: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.forbiddenName ? forbiddenNameValidator(this.forbiddenName)(control) : null;
  }
}
