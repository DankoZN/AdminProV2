import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: []
})
export class AccountSettingsComponent implements OnInit {
 
  constructor(
    private settingsService: SettingsService
  ) {}

  ngOnInit(): void {//ngoninit se dispara una vez ya se haya inicializado el componente
    this.settingsService.checkCurrentTheme();

  }


  changeTheme(theme: string) {
    
    this.settingsService.changeTheme(theme);

  }




}
