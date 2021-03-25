import { Component } from '@angular/core';
import { Anchor } from 'src/app/libs/content-fill/content-fill.interface';

@Component({
  selector: 'structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss']
})
export class StructuralDirectiveComponent {
  anchor: Anchor[] = [
    {
      href: '#resume',
      title: '概述'
    },
    {
      href: '#structural-directive',
      title: '结构型指令'
    },  {
      href: '#ngIf',
      title: 'ngIf'
    },  {
      href: '#ngFor',
      title: 'ngFor'
    },  {
      href: '#custom-structural-directive',
      title: '自定义结构型指令'
    },
  ];
  

  gender = '男生';
  ngIfCode = `
    <nz-radio-group [(ngModel)]="gender">
        <label nz-radio nzValue="男生">男生</label>
        <label nz-radio nzValue="女生">女生</label>
    </nz-radio-group>
    <div *ngIf="gender=='男生'">我是男生</div>
    <div *ngIf="gender=='女生'">我是女生</div>
    `;
  ngForCodeHtml = `
    <table>
        <thead>
            <tr>
                <th>序号</th>
                <th>姓名</th>
                <th>性别</th>
                <th>籍贯</th>
                <th>第一条记录</th>
                <th>最后条记录</th>
                <th>偶数记录</th>
                <th>奇数记录</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let obj of ngForData;
            let index = index;
            let first = first;
            let last = last;
            let even = even;
            let odd = odd;">
                <td>{{index}}</td>
                <td>{{obj.name}}</td>
                <td>{{obj.gender}}</td>
                <td>{{obj.hometown}}</td>
                <td [ngClass]="{'high-light-true':first,'high-light-false':!first}">{{first}}</td>
                <td [ngClass]="{'high-light-true':last,'high-light-false':!last}">{{last}}</td>
                <td [ngClass]="{'high-light-true':even,'high-light-false':!even}">{{even}}</td>
                <td [ngClass]="{'high-light-true':odd,'high-light-false':!odd}">{{odd}}</td>
            </tr>
        </tbody>
    </table>
    `;
  ngForCodeTs = `
    ngForData = [
        {
            name: 'Eve',
            gender: '男',
            hometown: '温州'
        }, {
            name: 'Jeffrey',
            gender: '男',
            hometown: '上虞'
        }, {
            name: 'Paigee',
            gender: '女',
            hometown: '诸暨'
        }
    ];
    `;
  trackByCodeHtml = `
    <ul>
        <li *ngFor="let obj of citiesForTrack;trackBy: trackByCityCode;">
            {{obj.name}}
        </li>
    </ul>
    <button (click)="updateCitiesForTrack()" nz-button>获取数据</button>
    <button (click)="resetCitiesForTrack()" nz-button>还原数据</button>
    `;
  trackByCodeTs = `
    citiesForTrack = [{//原始数据
        code: '3310',
        name: '杭州市'
    }, {
        code: '3330',
        name: '温州市'
    }, {
        code: '3360',
        name: '湖州市'
    }, {
        code: '3350',
        name: '嘉兴市'
    }, {
        code: '3370',
        name: '绍兴市'
    }];   
    updateCitiesForTrack() {//点击'获取数据'时修改数据源
        this.citiesForTrack = [{
            code: '3310',
            name: '杭州市'
        }, {
            code: '3330',
            name: '温州市'
        }, {
            code: '3380',
            name: '金华市'
        }, {
            code: '3350',
            name: '嘉兴市'
        }, {
            code: '3370',
            name: '绍兴市'
        }];
    }
    resetCitiesForTrack() {//点击'还原数据'时修改数据源
        this.citiesForTrack = [{
            code: '3310',
            name: '杭州市'
        }, {
            code: '3330',
            name: '温州市'
        }, {
            code: '3360',
            name: '湖州市'
        }, {
            code: '3350',
            name: '嘉兴市'
        }, {
            code: '3370',
            name: '绍兴市'
        }];
    }
    trackByCityCode(obj: { code: string, name: string }) {//trackBy函数,以对象的code为标识
        return obj.code;
    }
    `;
  ngForData = [
    {
      name: 'Eve',
      gender: '男',
      hometown: '温州'
    },
    {
      name: 'Jeffrey',
      gender: '男',
      hometown: '上虞'
    },
    {
      name: 'Paigee',
      gender: '女',
      hometown: '诸暨'
    }
  ];
  citiesForNoTrack = [
    {
      code: '3310',
      name: '杭州市'
    },
    {
      code: '3330',
      name: '温州市'
    },
    {
      code: '3360',
      name: '湖州市'
    },
    {
      code: '3350',
      name: '嘉兴市'
    },
    {
      code: '3370',
      name: '绍兴市'
    }
  ];
  citiesForTrack = [
    {
      code: '3310',
      name: '杭州市'
    },
    {
      code: '3330',
      name: '温州市'
    },
    {
      code: '3360',
      name: '湖州市'
    },
    {
      code: '3350',
      name: '嘉兴市'
    },
    {
      code: '3370',
      name: '绍兴市'
    }
  ];
  updateCitiesForNoTrack() {
    this.citiesForNoTrack = [
      {
        code: '3310',
        name: '杭州市'
      },
      {
        code: '3330',
        name: '温州市'
      },
      {
        code: '3380',
        name: '金华市'
      },
      {
        code: '3350',
        name: '嘉兴市'
      },
      {
        code: '3370',
        name: '绍兴市'
      }
    ];
  }
  resetCitiesForNoTrack() {
    this.citiesForNoTrack = [
      {
        code: '3310',
        name: '杭州市'
      },
      {
        code: '3330',
        name: '温州市'
      },
      {
        code: '3360',
        name: '湖州市'
      },
      {
        code: '3350',
        name: '嘉兴市'
      },
      {
        code: '3370',
        name: '绍兴市'
      }
    ];
  }
  updateCitiesForTrack() {
    this.citiesForTrack = [
      {
        code: '3310',
        name: '杭州市'
      },
      {
        code: '3330',
        name: '温州市'
      },
      {
        code: '3380',
        name: '金华市'
      },
      {
        code: '3350',
        name: '嘉兴市'
      },
      {
        code: '3370',
        name: '绍兴市'
      }
    ];
  }
  resetCitiesForTrack() {
    this.citiesForTrack = [
      {
        code: '3310',
        name: '杭州市'
      },
      {
        code: '3330',
        name: '温州市'
      },
      {
        code: '3360',
        name: '湖州市'
      },
      {
        code: '3350',
        name: '嘉兴市'
      },
      {
        code: '3370',
        name: '绍兴市'
      }
    ];
  }
  directiveCodeHtml = `
    <nz-radio-group [(ngModel)]="milkTeaType">
        <label nz-radio nzValue="oreo">请前夕喝奥利奥奶茶</label>
        <label nz-radio nzValue="redBean">请前夕喝红豆奶茶</label>
        <label nz-radio nzValue="matcha">请前夕喝抹茶奶茶</label>
    </nz-radio-group>
    <p *nssMilkTeaType="milkTeaType">
        来一杯奶茶
    </p>
    `;
  directiveCodeTs = `
    import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

    @Directive({
        selector: '[nssMilkTeaType]'
    })
    export class NssMilkTeaDirective {
        constructor(
            private templateRef: TemplateRef<any>,
            private viewContainer: ViewContainerRef) {
        }
        @Input('nssMilkTeaType') set type(type: string) {
            if (type === 'oreo') {
                this.viewContainer.clear();//清除所有内嵌视图
                this.viewContainer.createEmbeddedView(this.templateRef);//创建内嵌视图
            } else if (type === 'redBean') {
                this.viewContainer.clear();
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.viewContainer.createEmbeddedView(this.templateRef);
            } else if (type === 'matcha') {
                this.viewContainer.clear();
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        }
    }
    `;
  milkTeaType = 'oreo';
  trackByCityCode(obj: { code: string; name: string }) {
    return obj.code;
  }
  code1 = `
    <p *directive>
        hello world
    </p>
    <!--经过指令后-->
    <!--产物一:HTML模板-->
    <p>
        hello world
    </p>
    <!--产物二:视图容器-->
    <container>
    </container>
    <!--在容器中添加模板-->
    <container>
        <p>
            hello world
        </p>
    </container>
    `;
}
