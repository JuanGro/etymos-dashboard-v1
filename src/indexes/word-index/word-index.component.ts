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

  constructor(private httpService: HttpService, public toasterService: ToasterService) {
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
        perPage: 10
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

  add(word: Word) {
    const url = 'words';
    this.httpService.post(url, word).subscribe(data => {
      this.toasterService.showSuccess('Palabra', 'La palabra fue creada con éxito');
    });
  }

  edit(word: Word) {
    const url = 'words/' + word.id;
    this.httpService.post(url, word).subscribe(data => {
      this.toasterService.showSuccess('Palabra', 'La palabra fue modificada con éxito');
    });
  }

  delete(word: Word) {
    const url = 'words/' + word.id;
    this.httpService.delete(url).subscribe(data => {
      this.toasterService.showSuccess('Palabra', 'La palabra fue eliminada con éxito');
    });
  }
}
