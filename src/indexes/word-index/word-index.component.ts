import { Component, OnInit, OnChanges } from '@angular/core';
import { Word } from './../../models/word';
import { HttpService } from './../../services/http.service';
import { ToasterService } from 'src/services/toaster.service';

@Component({
  providers: [HttpService],
  selector: 'app-word-index',
  templateUrl: './word-index.component.html'
})
export class WordIndexComponent implements OnInit, OnChanges {
    ngOnInit() {}

    ngOnChanges() {}


}