import { Component, ViewChild, ViewContainerRef, ComponentFactory, ComponentRef, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { AddPersonComponent } from './child/add-person.component';

@Component({
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponentComponent implements OnDestroy {
  componentRefArray = []; //定义存放组件实例的数组
  @ViewChild('addPersonContainer', { read: ViewContainerRef }) container: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) {}
  addPerson(gender: string) {
    if (this.container.length < 5) {
      //传入组件原型,返回组件工厂
      const factory: ComponentFactory<AddPersonComponent> = this.resolver.resolveComponentFactory(AddPersonComponent);
      //传入组件工厂,返回组件实例
      const componentRef: ComponentRef<AddPersonComponent> = this.container.createComponent(factory);
      componentRef.instance.gender = gender;
      this.componentRefArray.push(componentRef);
    }
  }
  clear() {
    this.container.clear();
    this.value = [];
    this.componentRefArray = [];
  }
  value = [];
  getValueList() {
    this.value = []; //遍历数组,调用每一个组件实例的方法
    this.componentRefArray.forEach((obj: ComponentRef<AddPersonComponent>) => {
      this.value.push(obj.instance.returnValue());
    });
  }
  ngOnDestroy() {
    //遍历数组,摧毁每一个实例
    this.componentRefArray.forEach((obj: ComponentRef<AddPersonComponent>) => {
      obj.destroy();
    });
  }
  code1 = `
    <button nz-button nzType="primary" (click)="addPerson('boy')">新增男性记录</button>
    <button nz-button nzType="primary" (click)="addPerson('girl')">新增女性记录</button>
    <button nz-button nzType="primary" (click)="getValueList()">获取值集合</button>
    <button nz-button nzType="danger" (click)="clear()">清空全部记录</button>
    <br/> 获取结果集:{{value | json }}
    <div class="dynamic-component-container">
        <ng-template #addPersonContainer></ng-template>
    </div>
    `;
  code2 = `
    componentRefArray = [];//定义存放组件实例的数组
    @ViewChild('addPersonContainer', { read: ViewContainerRef }) container: ViewContainerRef;
    constructor(private resolver: ComponentFactoryResolver) { }
    addPerson(gender: string) {
        if (this.container.length < 5) {
            //传入组件原型,返回组件工厂
            const factory: ComponentFactory<AddPersonComponent> = this.resolver.resolveComponentFactory(AddPersonComponent);
            //传入组件工厂,返回组件实例
            const componentRef: ComponentRef<AddPersonComponent> = this.container.createComponent(factory);
            componentRef.instance.gender = gender;
            this.componentRefArray.push(componentRef);
        }
    }
    clear() {
        this.container.clear();
        this.value = [];
        this.componentRefArray = [];
    }
    value = [];
    getValueList() {
        this.value = [];//遍历数组,调用每一个组件实例的方法
        this.componentRefArray.forEach((obj: ComponentRef<AddPersonComponent>) => {
            this.value.push(obj.instance.returnValue());
        });
    }
    ngOnDestroy() {
        //遍历数组,摧毁每一个实例
        this.componentRefArray.forEach((obj: ComponentRef<AddPersonComponent>) => {
            obj.destroy();
        });
    }
    `;
  code3 = `
    <input nz-input [(ngModel)]="name" name="name" placeholder="{{nameTip}}">
    <input nz-input [(ngModel)]="age" name="age" placeholder="{{ageTip}}">
    `;
  code4 = `
    gender = 'boy';
    name;
    age;
    nameTip;
    ageTip;
    ngOnInit(): void {
        if (this.gender === 'boy') {
            this.nameTip = '小哥哥的姓名';
            this.ageTip = '小哥哥的年龄';
        } else if (this.gender === 'girl') {
            this.nameTip = '小姐姐的姓名';
            this.ageTip = '小姐姐的年龄';
        }
    }
    returnValue() {
        return {
            name: this.name,
            age: this.age
        };
    }
    `;
}
