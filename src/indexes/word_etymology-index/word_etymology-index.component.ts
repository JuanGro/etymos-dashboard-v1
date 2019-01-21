import { Component, OnInit, OnChanges } from '@angular/core';
import { WordEtymology } from '../../models/word_etymology';
import { HttpService } from '../../services/http.service';
import { ToasterService } from 'src/services/toaster.service';

@Component({
  providers: [HttpService],
  selector: 'app-word-etymology-index',
  templateUrl: './word_etymology-index.component.html'
})
export class WordEtymologyIndexComponent implements OnInit, OnChanges {
  public settings: any;
  public wordEtymologyList: Array<WordEtymology>;

  constructor(private httpService: HttpService, public toasterService: ToasterService) {
    this.loadList();
  }

  ngOnInit() {
    this.settings = {
      columns: {
        id: {
          title: 'id'
        },
        word_id: {
          title: 'word_id'
        },
        word_word: {
          title: 'word_word'
        },
        etymology_id: {
          title: 'etymology_id'
        },
        etymology_pattern: {
          title: 'etymology_pattern'
        },
        etymology_order: {
          title: 'etymology_order'
        }
      },
      pager: {
        perPage: 10
      },
      actions: {
        add: false,
        edit: false,
        delete: false
      }
    };
  }

  ngOnChanges() {
    this.loadList();
  }

  loadList() {
    const url = 'word_etymologies';
    this.wordEtymologyList = [];
    this.httpService.get(url).subscribe(data => {
      this.wordEtymologyList = [];
      const wordEtymologyList = data as Array<WordEtymology>;
      for (const wordEtymology of wordEtymologyList) {
        this.wordEtymologyList.push(new WordEtymology(wordEtymology));
      }
    });
  }
}
