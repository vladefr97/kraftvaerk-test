import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PainterComponent } from './units/project/painter/painter.component';
import { AddBtnComponent } from './units/base/add-btn/add-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PainterComponent,
    AddBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
