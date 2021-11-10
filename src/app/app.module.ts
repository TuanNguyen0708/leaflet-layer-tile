import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeafletComponent } from './leaflet/leaflet.component';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import { LeafletHandcodeComponent } from './leaflet-handcode/leaflet-handcode.component';


@NgModule({
  declarations: [
    AppComponent,
    LeafletComponent,
    LeafletHandcodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    CheckboxModule,
    RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
