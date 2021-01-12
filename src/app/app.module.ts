import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CardComponent } from './card/card.component';
import { ShadowOnHoverAndCheckModule } from './shared/directives/shadow-on-hover-and-check.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ShadowOnHoverAndCheckModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
