import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox'; //指定类型为输入框

  constructor(options: {} = {}) {
    super(options);
  }
}
