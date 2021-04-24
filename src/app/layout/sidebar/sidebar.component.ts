import { LocationStrategy, Location } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.updateParam(page);
  }

  private updateParam(page: string): void {
    const queryParamsObj = { page };
    this.location.replaceState(
      this.router.createUrlTree([this.locationStrategy.path().split('?')[0]], { queryParams: queryParamsObj }).toString()
    );
  }

  constructor(
    private cdr: ChangeDetectorRef,
    private location: Location,
    private router: Router,
    private locationStrategy: LocationStrategy,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.cdr.detectChanges();
  }
}
