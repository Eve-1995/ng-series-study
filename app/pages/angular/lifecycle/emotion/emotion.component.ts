import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'emotion',
  templateUrl: './emotion.component.html',
  styleUrls: ['./emotion.component.scss']
})
export class EmotionComponent implements OnChanges {
  @Input() name: string;
  firstLover;
  currentLover;
  previousLover;
  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges['name'].firstChange) {
      this.firstLover = simpleChanges['name'].currentValue;
      this.currentLover = simpleChanges['name'].currentValue;
    } else {
      this.previousLover = simpleChanges['name'].previousValue;
      this.currentLover = simpleChanges['name'].currentValue;
    }
  }
}
