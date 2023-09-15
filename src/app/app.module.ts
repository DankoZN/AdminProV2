import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';

// modulos
import { appRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [

    AppComponent,
    NopagesfoundComponent,

  ],
  imports: [
    BrowserModule,
    appRoutingModule, //todos los modulos van en los imports
    PagesModule,
    AuthModule,
    SharedModule //shared para breadcrums y headers

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
