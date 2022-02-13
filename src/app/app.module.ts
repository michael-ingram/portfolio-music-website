import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ConcertsService} from "./services/concerts.service";
import { HttpClientModule} from "@angular/common/http";
import {AuthService} from "./services/auth.service";
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ConcertsComponent,
    AboutComponent,
    GalleryComponent,
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ConcertsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
