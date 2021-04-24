import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  changePage(page: string): void {
    this.appService.changePage$.next(page);
  }

  constructor(private cdr: ChangeDetectorRef, private appService: AppService) {}

  ngOnInit(): void {
    this.cdr.detectChanges();
  }
}
