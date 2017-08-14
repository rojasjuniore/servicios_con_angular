import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



// http
import { HttpModule } from '@angular/http';


// Componentes
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';

// Servicios

import { ImdbService } from './services/imdb.service';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ImdbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
