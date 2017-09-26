import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SiteSectionComponent } from './site-section/site-section.component';
import { HelpSectionComponent } from './help-section/help-section.component';
import { BikersListComponent } from './bikers-list/bikers-list.component';
import { FooterComponent } from './footer/footer.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

import { UserService } from './user/user.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SiteSectionComponent,
    HelpSectionComponent,
    BikersListComponent,
    FooterComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
