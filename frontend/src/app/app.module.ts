import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistoComponent } from './registo/registo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemSearchbarComponent } from './item-searchbar/item-searchbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { LibraryComponent } from './library/library.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ItemSearchbarComponent,
    DashboardComponent,
    RegistoComponent,
    UserProfileComponent,
    ItemDetailsComponent,
    AppHeaderComponent,
    LibraryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
