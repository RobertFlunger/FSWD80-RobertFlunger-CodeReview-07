import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { TravelComponent } from './travel/travel.component';
import { FooterComponent } from './footer/footer.component';
import { TravelListComponent } from './travel-list/travel-list.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from "../environments/environment";

import { TravelService } from './shared/travel.service';
import { TravelCardsComponent } from './travel-cards/travel-cards.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    HomeComponent,
    BlogComponent,
    TravelComponent,
    FooterComponent,
    TravelListComponent,
    TravelCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [TravelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
