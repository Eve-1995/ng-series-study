import { Container01Component } from '../container/container-01.component';
import { Container02Component } from '../container/container-02.component';
import { Container03Component } from '../container/container-03.component';

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
    case '03':
      return {
        component: Container03Component
      };
    default:
      return {
        component: Container01Component
      };
  }
}
