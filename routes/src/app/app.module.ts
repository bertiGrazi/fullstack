import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Pages
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';
import { MenuComponent } from './shared/menu/menu.component';
import { DashboardRoutingModule } from './dashboard/dasboard-routhing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    PageErrorComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
