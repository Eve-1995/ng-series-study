import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  demo1Group: FormGroup;
  userGroup: FormGroup;
  userGroup2: FormGroup;
  hobbyForm: FormGroup;
  ngOnInit() {
    this.demo1Group = new FormGroup({
      demo1Value: new FormControl()
    });
    this.userGroup = new FormGroup({
      personalGroup: new FormGroup({
        userName: new FormControl('', [Validators.required])
      }),
      schoolGroup: new FormGroup({
        collegePlace: new FormControl('', [Validators.required, Validators.minLength(4)])
      })
    });
    this.userGroup2 = new FormGroup({
      personalGroup: new FormGroup({
        userName: new FormControl('', [Validators.required])
      }),
      schoolGroup: new FormGroup({
        collegePlace: new FormControl('', [Validators.required, Validators.minLength(4)])
      })
    });
    this.hobbyForm = this.formBuilder.group({
      hobby: this.formBuilder.array([this.formBuilder.control('', [Validators.required])])
    });
  }
  get hobbies() {
    //获取FormArray对象
    return this.hobbyForm.get('hobby') as FormArray;
  }
  addHobby() {
    //添加新项
    this.hobbies.push(this.formBuilder.control('', [Validators.required]));
  }
  hobbyResult = [];
  getHobbies() {
    this.hobbyResult = [];
    for (let i = 0; i < this.hobbies.length; i++) {
      const value = this.hobbies.get(i.toString()).value;
      this.hobbyResult.push(value);
    }
  }
  result;
  updateDemo1Value() {
    this.demo1Group.get('demo1Value').setValue('Eve');
  }
  getDemo1Value() {
    this.result = this.demo1Group.get('demo1Value').value;
  }
  code1 = `
    <form [formGroup]="demo1Group">
        <input formControlName="demo1Value" nz-input placeholder="尝试输入值">
        <button (click)="updateDemo1Value()" nz-button nzType="primary">设置值</button>
        <button (click)="getDemo1Value()" nz-button nzType="primary">取得值</button>
        <br/>
        你输入的值为:{{result}}
    </form>
    `;
  code2 = `
    this.demo1Group = new FormGroup({
        'demo1Value': new FormControl()
    });
    result;
    updateDemo1Value() {
        this.demo1Group.get('demo1Value').setValue('Eve');
    }
    getDemo1Value() {
        this.result = this.demo1Group.get('demo1Value').value;
    }
    `;
  code3 = `
    <form [formGroup]="userGroup">
        用户表单(两个小表单合起来)的合法状态:<span>{{userGroup.valid}}</span>
        <h2>个人信息</h2>
        <div formGroupName="personalGroup">
            <input formControlName="userName" nz-input placeholder="用户名,必填项">
        </div>
        userName的值为:<span>{{userGroup.get('personalGroup').get('userName').value}}</span>
        <h2>学籍信息</h2>
        <div formGroupName="schoolGroup">
            <input formControlName="collegePlace" nz-input placeholder="大学所在地,不少于4个字符">
        </div>
        collegePlace的值为:<span>{{userGroup.get('schoolGroup').get('collegePlace').value}}</span><br/>
    </form>
    `;
  code4 = `
    userGroup: FormGroup;
    this.userGroup = new FormGroup({
        personalGroup: new FormGroup({
            'userName': new FormControl('', [Validators.required])
        }),
        schoolGroup: new FormGroup({
            'collegePlace': new FormControl('', [Validators.required, Validators.minLength(4)])
        })
    });
    `;
  updatePersonalGroup() {
    this.userGroup2.patchValue({
      personalGroup: {
        userName: 'Eve'
      }
    });
  }
  code5 = `
    <form [formGroup]="userGroup2">
        <!--其他代码和上面的案例一致,注意这里我的分组名userGroup2变化了,为了演示的代码效果互不影响-->
        <button (click)="updatePersonalGroup()" nz-button nzType="primary">使用默认用户名</button>
    </form>
    `;
  code6 = `
    updatePersonalGroup() {
        this.userGroup2.patchValue({
            personalGroup: {
                'userName':'Eve'
            }
        });
    }
    `;
  code7 = `
    this.userGroup = new FormGroup({
        personalGroup: new FormGroup({
            'userName': new FormControl('', [Validators.required])
        }),
        schoolGroup: new FormGroup({
            'collegePlace': new FormControl('', [Validators.required, Validators.minLength(4)])
        })
    });
    `;
  code8 = `
    constructor(private formBuilder: FormBuilder) { }
    this.userGroup = this.formBuilder.group({
        personalGroup: this.formBuilder.group({
            'userName': ['',Validators.required]
        }),
        schoolGroup: this.formBuilder.group({
            'collegePlace': ['',Validators.required]
        })
    });
    `;
  code9 = `
    <form [formGroup]="hobbyForm">
        <div formArrayName="hobby">
            <button nzType="primary" (click)="addHobby()" nz-button>新增爱好</button>
            <button nzType="primary" (click)="getHobbies()" [disabled]='hobbyForm.invalid' nz-button>显示结果</button>
            <div *ngFor="let obj of hobbies.controls; let i=index">
                <label>
                    爱好{{i+1}}:
                    <input nz-input [formControlName]="i">
                </label>
            </div>
        </div>
    </form>
    <div *ngFor="let value of hobbyResult; let i=index">
        爱好{{i+1}}:{{value}}
    </div>
    `;
  code10 = `
    this.hobbyForm = this.formBuilder.group({
        hobby: this.formBuilder.array([
            this.formBuilder.control('', [Validators.required])
        ])
    });
    get hobbies() {//获取FormArray对象
        return this.hobbyForm.get('hobby') as FormArray;
    }
    addHobby() {//添加新项
        this.hobbies.push(this.formBuilder.control('', [Validators.required]));
    }
    hobbyResult = [];
    getHobbies() {
        this.hobbyResult = [];
        for (let i = 0; i < this.hobbies.length; i++) {
            const value = this.hobbies.get(i.toString()).value;
            this.hobbyResult.push(value);
        }
    }
    `;
}
