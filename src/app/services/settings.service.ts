import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private currentTheme = document.querySelector("#theme");

  constructor() { 
    let prevTheme = localStorage.getItem("theme");

    if(prevTheme){
      document.querySelector("#theme")?.setAttribute("href", prevTheme);
    }
  }

  changeTheme(theme: string){

    const url = `./assets/css/colors/${theme}.css`;

    this.currentTheme?.setAttribute("href", url);
    
    localStorage.setItem("theme", url);
    
    this.checkCurrentTheme();
  }

  checkCurrentTheme(){
    const links = document.querySelectorAll(".selector");

    links.forEach((elem: any) => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const themeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.currentTheme?.getAttribute('href');

      if(themeUrl === currentTheme){
        elem.classList.add('working');
      }
    })

  }

}
