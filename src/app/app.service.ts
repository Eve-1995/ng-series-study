import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppService {
  // <code-mirror [code]="appService.code1 | async "></code-mirror>
  code1 = this.getFile('app/pages/rxjs/init-rxjs/children/rxjs-child-03.component.ts');

  getFile(path: string): Observable<string> {
    return this.http.get(path, { responseType: 'text' });
  }

  constructor(private http: HttpClient) {}
}
