import {
  Page001Component,
  Page002Component,
  Page003Component,
  Page004Component,
  Page005Component,
  Page006Component,
  Page007Component,
  Page008Component,
  Page009Component
} from '@page';

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
    case '004':
      return {
        component: Page004Component
      };
    case '005':
      return {
        component: Page005Component
      };
    case '006':
      return {
        component: Page006Component
      };
    case '007':
      return {
        component: Page007Component
      };
    case '008':
      return {
        component: Page008Component
      };
    case '009':
      return {
        component: Page009Component
      };
    default:
      return {
        component: Page001Component
      };
  }
}
