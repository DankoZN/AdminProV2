import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunctions():any; //codigo para acceder desde angular aunque este globalmente en la app


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit{


  constructor(
    private settingsService: SettingsService

  ) { }


  ngOnInit(): void {
    customInitFunctions();
    
  }

}
