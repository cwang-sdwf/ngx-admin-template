import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
    // <nb-menu [items]="menu"></nb-menu>
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-full-screen-layout>
    
      <router-outlet></router-outlet>
    </ngx-full-screen-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
