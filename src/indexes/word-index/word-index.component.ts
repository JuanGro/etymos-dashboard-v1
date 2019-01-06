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
  public settings: any;
  public wordList: Array<Word>;

  constructor(private httpService: HttpService) {
    this.loadList();
  }

  ngOnInit() {
    this.settings = {
      columns: {
        id: {
          title: 'id'
        },
        word_word: {
          title: 'word_word'
        },
        meaning_word: {
          title: 'meaning_word'
        },
        image_word: {
          title: 'image_word'
        },
        etymos_version_word: {
          title: 'etymos_version_word'
        }
      },
      pager: {
        perPage: 20
      }
    };
  }

  ngOnChanges() {
    this.loadList();
  }

  loadList() {
    const url = 'words';
    this.wordList = [];
    this.httpService.get(url).subscribe(data => {
      this.wordList = data as Array<Word>;
    });
  }
}