import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordIndexComponent } from './../indexes/word-index/word-index.component';
import { WizardComponent } from 'src/wizard/wizard.component';

const routes: Routes = [
  { path: '', component: WizardComponent },
  { path: 'word_index', component: WordIndexComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}