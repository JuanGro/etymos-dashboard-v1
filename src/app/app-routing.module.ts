import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordIndexComponent } from './../indexes/word-index/word-index.component';
import { WordEtymologyIndexComponent } from '../indexes/word_etymology-index/word_etymology-index.component';
import { WizardComponent } from '../wizard/wizard.component';
import { TestIndexComponent } from '../indexes/test-index/test-index.component';
import { OptionIndexComponent } from '../indexes/option-index/option-index.component';
import { EtymologyIndexComponent } from '../indexes/etymology-index/etymology-index.component';

const routes: Routes = [
  { path: '', component: WizardComponent },
  { path: 'word_index', component: WordIndexComponent },
  { path: 'word_etymology_index', component: WordEtymologyIndexComponent },
  { path: 'test_index', component: TestIndexComponent },
  { path: 'option_index', component: OptionIndexComponent },
  { path: 'etymology_index', component: EtymologyIndexComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
