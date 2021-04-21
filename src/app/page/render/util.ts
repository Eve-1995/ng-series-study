import { Container00Component } from '../container/container-00.component';
import { Container01Component } from '../container/container-01.component';
import { Container02Component } from '../container/container-02.component';

export function getComponent(index: string): { component: any } {
  switch (index) {
    case '01':
      return {
        component: Container01Component
      };
    case '02':
      return {
        component: Container02Component
      };
    default:
      return { component: Container00Component };
  }
}
