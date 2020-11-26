import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {PainterComponent} from './units/project/painter/painter.component';
import {AddBtnComponent} from './units/base/add-btn/add-btn.component';
import {HeaderComponent} from './units/project/header/header.component';

import {
  MatIconModule,
} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
const MaterialComponents = [MatIconModule];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PainterComponent,
    AddBtnComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule

  ],
  exports: [MaterialComponents],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
