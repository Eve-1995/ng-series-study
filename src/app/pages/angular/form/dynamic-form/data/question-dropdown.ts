import { QuestionBase } from './question-base';

export class DropdownQuestion extends QuestionBase<string> {
  controlType = 'dropdown'; //指定类型为下拉框
  options: { key: string; value: string }[] = []; //下拉框的选项

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
