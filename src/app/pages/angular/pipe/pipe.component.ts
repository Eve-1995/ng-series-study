import { Component, DoCheck, OnInit } from '@angular/core';
import { Anchor } from 'src/app/libs/content-fill/content-fill.interface';
@Component({
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit, DoCheck {

  anchor: Anchor[] = [
    {
      href: '#resume',
      title: '概述'
    },
    {
      href: '#DatePipe',
      title: 'DatePipe'
    },
    {
      href: '#custom-pipe',
      title: '自定义管道'
    },
  ];

  date;
  constructor() {
    this.date = new Date().toString();
  }
  ngOnInit(): void {
    this.data = {
      tall: this.tall,
      weight: this.weight
    };
  }
  tall;
  weight;
  data = {
    tall: null,
    weight: null
  };
  tallUnit = 'cm';
  weightUnit = 'kg';
  ngDoCheck() {
    this.data = {
      tall: this.tall,
      weight: this.weight
    };
  }
  code1 = `
    {{ value_expression | pipeName : agr1 :agr2 }}
    `;
  code2 = `
    <input nz-input [(ngModel)]="tall" name="tall" placeholder="请输入你的身高">
    <nz-radio-group [(ngModel)]="tallUnit">
        <label nz-radio nzValue="cm">厘米</label>
        <label nz-radio nzValue="m">米</label>
    </nz-radio-group>
    <input nz-input [(ngModel)]="weight" name="weight" placeholder="请输入你的体重">
    <nz-radio-group [(ngModel)]="weightUnit">
        <label nz-radio nzValue="kg">千克</label>
        <label nz-radio nzValue="jin">斤</label>
    </nz-radio-group>
    <br/> {{data | shape:tallUnit:weightUnit}}
    `;
  code3 = `
    tall;
    weight;
    data = {
        tall: this.tall,
        weight: this.weight
    };
    tallUnit = 'cm';
    weightUnit = 'kg';
    ngDoCheck() {
        this.data = {
            tall: this.tall,
            weight: this.weight
        };
    }
    `;
  code4 = `
    import { Pipe, PipeTransform } from '@angular/core';

    @Pipe({ name: 'shape' })
    export class ShapePipe implements PipeTransform {
        transform(obj: { tall, weight }, tallUnit: string, weightUnit: string): string {
            // const exp = parseFloat(exponent);
            if (obj.tall !== undefined && obj.weight !== undefined) {
                let tall = obj.tall;
                let weight = obj.weight;
                if (tallUnit === 'cm') {
                    tall /= 100;
                }
                if (weightUnit === 'jin') {
                    weight /= 2;
                }
                const BMI = weight / (tall * tall);
                let result = '经计算,您的BMI为' + BMI.toFixed(2) + ',属于';
                if (BMI <= 18.4) {
                    return result += '偏瘦';
                } else if (BMI <= 23.9) {
                    return result += '正常';
                } else if (BMI <= 27.9) {
                    return result += '过重';
                } else if (BMI > 27.9) {
                    return result += '肥胖';
                }
            } else {
                return '请完善身高体重信息!';
            }
        }
    }
    `;
  code5 = `
    {{ value_expression | pipe1 | pipe2}}
    `;
  code6 = `
    {{date | date:"yyyy-MM-dd"}}
    `;
  code7 = `
    {{date}}
    `;
}
