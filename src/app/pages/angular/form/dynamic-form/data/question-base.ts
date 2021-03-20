export class QuestionBase<T> {
  value: T; //默认值
  key: string; //标记关键字
  label: string; //显示的名字
  order: number; //序号
  controlType: string; //控件类型
  rule: Array<T>; //验证规则
  tips: Array<string>;

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      controlType?: string;
      rule?: Array<T>;
      tips?: Array<string>;
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.rule = options.rule || [];
    this.tips = options.tips || [];
  }
}
