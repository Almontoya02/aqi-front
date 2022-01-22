import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainappComponent } from './mainapp/mainapp.component';
import { MaincardComponent } from './maincard/maincard.component';
import { CardstationComponent } from './cardstation/cardstation.component';
import { StationspageComponent } from './stationspage/stationspage.component';

@NgModule({
  declarations: [
    AppComponent,
    MainappComponent,
    MaincardComponent,
    CardstationComponent,
    StationspageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
