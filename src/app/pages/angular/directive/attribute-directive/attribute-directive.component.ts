import { Component } from '@angular/core';

@Component({
  selector: 'attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.scss']
})
export class AttributeDirectiveComponent {
  hobby = 'sweet';
  ngSwitchCode = `
    <nz-radio-group [(ngModel)]="hobby">
        <label nz-radio nzValue="sweet">我喜欢吃甜的</label>
        <label nz-radio nzValue="salty">我喜欢吃咸的</label>
        <label nz-radio nzValue="yummy">只要好吃就行</label>
    </nz-radio-group>
    <div [ngSwitch]="hobby">
        <p *ngSwitchCase="'sweet'">生活就需要甜甜的味道!</p>
        <p *ngSwitchCase="'salty'">咸一点的食物才叫美食,其他的只能叫吃的!</p>
        <p *ngSwitchDefault>只要是好吃的我都喜欢!</p>
    </div>
    `;
  color: string;
  weight: string;
  size: number;
  attributedirectiveCodeHtml = `
    <p nssStyle [nssColor]="color" [nssSize]="size" [nssWeight]="weight">
        生活就是这样的五彩斑斓!
    </p>
    `;
  attributedirectiveCodeTs = `
    import { Directive, ElementRef, Renderer, Input, DoCheck } from '@angular/core';
    @Directive({
        selector: '[nssStyle]'
    })
    export class NssStyleDirective implements DoCheck {
        @Input('nssColor') color: string;
        @Input('nssWeight') weight: string;
        @Input('nssSize') size: number;
        constructor(
            private elementRef: ElementRef,
            private renderer: Renderer
        ) {
        }
        ngDoCheck() {
            this.renderer.setElementStyle(this.elementRef.nativeElement, 'color', this.color);
            this.renderer.setElementStyle(this.elementRef.nativeElement, 'font-weight', this.weight);
            this.renderer.setElementStyle(this.elementRef.nativeElement, 'font-size', this.size + 'px');
        }
    }`;
  colorBoolean = false;
  sizeBoolean = false;
  bothBoolean = false;
  ngClassCodeHtml = `
    <label nz-checkbox [(ngModel)]="colorBoolean">设置颜色为红色</label>
    <label nz-checkbox [(ngModel)]="sizeBoolean">设置大小为18px</label>
    <label nz-checkbox [(ngModel)]="bothBoolean">同时颜色和大小</label>
    <nz-card class="card">
        <p [ngClass]="'color size'">
            泡芙是世界上最好吃的甜点!
        </p>
        <p [ngClass]="['color', 'size']">
            泡芙是世界上最好吃的甜点!
        </p>
        <p [ngClass]="{'color': colorBoolean, 'size': sizeBoolean}">
            泡芙是世界上最好吃的甜点!
        </p>
        <p [ngClass]="stringExp">
            泡芙是世界上最好吃的甜点!
        </p>
        <p [ngClass]="{'color size' : bothBoolean}">
            泡芙是世界上最好吃的甜点!
        </p>
    </nz-card>
    `;
  ngClassCodeTs = `
    colorBoolean = false;
    sizeBoolean = false;
    bothBoolean = false;
    stringExp = 'color';
    `;
  stringExp = 'color';
  ngStyleCodeHtml = `
    <p [ngStyle]="{'color': 'red'}">
        小小炮娘，很是烦恼，眼望四周，焰火飘~
    </p>
    `;
}
