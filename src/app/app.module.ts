import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { WizardComponent } from './../wizard/wizard.component';

import { WordFormComponent } from './../forms/word-form/word-form.component';
import { TestFormComponent } from './../forms/test-form/test-form.component';
import { EtymologyFormComponent } from './../forms/etymology-form/etymology-form.component';

import { WordIndexComponent } from './../indexes/word-index/word-index.component';

import { HttpService } from './../services/http.service';
import { ToasterService } from './../services/toaster.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    WordFormComponent,
    TestFormComponent,
    EtymologyFormComponent,
    WordIndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ArchwizardModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    HttpService,
    ToasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
