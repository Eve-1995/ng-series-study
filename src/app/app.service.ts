import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppService {
  changePage$ = new Subject<string>();

  /**
   * 获取文件路径
   * @param fileNum 文件编号
   * @param type 文件类型, md为markdown文件, demo为Angular组件
   */
  getPath(fileNum: string, type: 'md' | 'html' | 'ts'): string {
    switch (type) {
      case 'md':
        return `app/page/md/${fileNum}.md`;
      case 'html':
        return `app/page/demo/demo-${fileNum}/demo-${fileNum}.component.html`;
      case 'ts':
        return `app/page/demo/demo-${fileNum}/demo-${fileNum}.component.ts`;
    }
  }
}
