import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard', 
      icon: 'mdi mdi-gauge', 
      submenus: [
        {title: 'Main', path: '/'},
        {title: 'Progress Bar', path: '/progress'},
        {title: 'Grafica', path: '/grafica1'},
        {title: 'Promesas', path: '/promises'},
        {title: 'Rxjs', path: '/rxjs'}
      ]
    }
  ];
  constructor() { }
}
