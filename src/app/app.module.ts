import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';

// modulos
import { appRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [

    AppComponent,
    NopagesfoundComponent,

  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    PagesModule,
    AuthModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
