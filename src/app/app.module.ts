import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { AppComponent } from './app.component';

import { WordFormComponent } from './../forms/word-form/word-form.component';
import { TestFormComponent } from './../forms/test-form/test-form.component';
import { EtymologyFormComponent } from './../forms/etymology-form/etymology-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WordFormComponent,
    TestFormComponent,
    EtymologyFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ArchwizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
