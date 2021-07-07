import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClubModule } from './club/club.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    ClubModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
