import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KingComponent } from './patterns/strategy/components/King/king/king.component';
import { DynamicallyComponentDirective } from './patterns/strategy/directives/DynamicallyComponent/dynamically-component.directive';
import { QueenComponent } from './patterns/strategy/components/Queen/queen/queen.component';
import { KnightComponent } from './patterns/strategy/components/Knight/knight/knight.component';
import { TrollComponent } from './patterns/strategy/components/Troll/troll/troll.component';

@NgModule({
  declarations: [
    AppComponent,
    KingComponent,
    DynamicallyComponentDirective,
    QueenComponent,
    KnightComponent,
    TrollComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
