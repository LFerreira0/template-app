import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateHeaderComponent } from './shared/componentes/template-header/template-header.component';
import { TemplateMainComponent } from './shared/componentes/template-main/template-main.component';
import { TemplateStacksComponent } from './shared/componentes/template-stacks/template-stacks.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateHeaderComponent,
    TemplateMainComponent,
    TemplateStacksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
