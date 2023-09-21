import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SettingsService {

  private linkTheme = document.querySelector('#theme');


  constructor() {

    const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css' //para grabar el color elegido antes de refresh
    this.linkTheme?.setAttribute('href', url);

    
   }

  changeTheme(theme: string) {
    
    const url = `./assets/css/colors/${theme}.css`;

    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url) //para grabar el color elegido antes de refresh
    this.checkCurrentTheme();
  }



  //Metodo que establece el valor
  checkCurrentTheme() {

    const links = document.querySelectorAll('.selector');
  
      links.forEach(elem => {//elemento html de forma individual

      //borrar clase working (check), se borra si es que la tiene
      elem.classList.remove('working');

      //de manera condicional se requiere obtener la siguiente informacion

      const btnTheme = elem.getAttribute('data-theme');//saber el tema del boton
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;//se necesita comparar con al url que esta almacenada en el LinkTheme
      const currentTheme = this.linkTheme?.getAttribute('href'); //se extrae el tema obtenido anteriormente
      
      if ( btnThemeUrl === currentTheme) { 
        
        elem.classList.add('working');
      }

    });
  }
}
