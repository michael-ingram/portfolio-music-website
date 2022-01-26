import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ConcertsComponent} from "./concerts/concerts.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'concerts', component: ConcertsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'gallery', component: GalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
