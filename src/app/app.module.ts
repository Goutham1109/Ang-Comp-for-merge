import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeInfoComponent } from './bike-info/bike-info.component';
import { BikeService } from './bike.service';
import { HttpModule } from '@angular/http';
import{AppRoutingModule} from './app-routing/app-routing.module';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {   MatListItem } from '@angular/material'
import { MatInputModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    BikesComponent,
    BikeInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
      MatListModule,
      MatCardModule,
      MatFormFieldModule,
      MatButtonModule
  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
