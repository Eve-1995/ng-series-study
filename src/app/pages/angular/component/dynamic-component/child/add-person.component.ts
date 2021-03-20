import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {
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
}
