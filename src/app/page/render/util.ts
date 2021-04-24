import { Container001Component } from '../container/container-001.component';
import { Container002Component } from '../container/container-002.component';
import { Container003Component } from '../container/container-003.component';

export function getComponent(index: string): { component: any } {
  switch (index) {
    case '001':
      return {
        component: Container001Component
      };
    case '002':
      return {
        component: Container002Component
      };
    case '003':
      return {
        component: Container003Component
      };
    default:
      return {
        component: Container001Component
      };
  }
}
