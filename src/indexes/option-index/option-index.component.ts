import { Component, OnInit, OnChanges } from '@angular/core';
import { Option } from '../../models/option';
import { HttpService } from '../../services/http.service';
import { ToasterService } from 'src/services/toaster.service';

@Component({
  providers: [HttpService],
  selector: 'app-option-index',
  templateUrl: './option-index.component.html'
})
export class OptionIndexComponent implements OnInit, OnChanges {
  public settings: any;
  public optionList: Array<Option>;

  constructor(private httpService: HttpService, public toasterService: ToasterService) {
    this.loadList();
  }

  ngOnInit() {
    this.settings = {
      columns: {
        id: {
          title: 'id'
        },
        word_option: {
          title: 'word_option'
        },
        correct: {
          title: 'correct'
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
    const url = 'options';
    this.optionList = [];
    this.httpService.get(url).subscribe(data => {
      this.optionList = data as Array<Option>;
    });
  }
}