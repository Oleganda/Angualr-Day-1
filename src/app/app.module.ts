import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeroPhotoComponent } from './hero-photo/hero-photo.component';
import { MainGridComponent } from './main-grid/main-grid.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewtripComponent } from './newtrip/newtrip.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroPhotoComponent,
    MainGridComponent,
    FooterComponent,
    BlogComponent,
    ContactComponent,
    NewtripComponent
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
