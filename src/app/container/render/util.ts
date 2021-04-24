import { Page001Component, Page002Component, Page003Component } from '@page';

export function getComponent(index: string): { component: any } {
  switch (index) {
    case '001':
      return {
        component: Page001Component
      };
    case '002':
      return {
        component: Page002Component
      };
    case '003':
      return {
        component: Page003Component
      };
    default:
      return {
        component: Page001Component
      };
  }
}
