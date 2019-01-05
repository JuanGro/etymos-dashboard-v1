import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { WordFormComponent } from './../forms/word-form/word-form.component';
import { TestFormComponent } from './../forms/test-form/test-form.component';
import { EtymologyFormComponent } from './../forms/etymology-form/etymology-form.component';

import { HttpService } from './../services/http.service';

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
    HttpClientModule,
    ArchwizardModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
