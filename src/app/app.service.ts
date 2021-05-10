import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

type FileType = 'md' | 'html' | 'ts' | 'scss';

@Injectable({ providedIn: 'root' })
export class AppService {
  changePage$ = new Subject<string>();

  /**
   * 获取文件路径
   * @param fileNum 文件编号
   * @param type 文件类型, md为markdown文件, demo为Angular组件
   */
  getPath(fileNum: string, type: FileType): string {
    switch (type) {
      case 'md':
        return `app/container/md/${fileNum}.md`;
      case 'html':
        return `app/container/demo/demo-${fileNum}/demo-${fileNum}.component.html`;
      case 'scss':
        return `app/container/demo/demo-${fileNum}/demo-${fileNum}.component.scss`;
      case 'ts':
        return `app/container/demo/demo-${fileNum}/demo-${fileNum}.component.ts`;
    }
  }
}
