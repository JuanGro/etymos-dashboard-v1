import { Component, OnInit, OnChanges } from '@angular/core';
import { WordEtymology } from '../../models/word_etymology';
import { HttpService } from '../../services/http.service';
import { ToasterService } from 'src/services/toaster.service';

@Component({
  providers: [HttpService],
  selector: 'app-word_etymology-index',
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
        etymology_id: {
          title: 'etymology_id'
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
      this.wordEtymologyList = data as Array<WordEtymology>;
    });
  }
}