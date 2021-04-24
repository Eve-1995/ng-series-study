import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({ template: '' })
export abstract class PageBaseComponent {
  constructor(public appService: AppService) {}
}
