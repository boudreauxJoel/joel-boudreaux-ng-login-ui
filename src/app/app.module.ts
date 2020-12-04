import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLoggedInComponent } from './user-logged-in/user-logged-in.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ConvertCasePipe } from './convert-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserLoggedInComponent,
    HomepageComponent,
    ConvertCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
