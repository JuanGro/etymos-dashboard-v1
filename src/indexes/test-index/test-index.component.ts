import { Component, OnInit, OnChanges } from '@angular/core';
import { Test } from '../../models/test';
import { HttpService } from '../../services/http.service';
import { ToasterService } from 'src/services/toaster.service';

@Component({
  providers: [HttpService],
  selector: 'app-test-index',
  templateUrl: './test-index.component.html'
})
export class TestIndexComponent implements OnInit, OnChanges {
  public settings: any;
  public testList: Array<Test>;

  constructor(private httpService: HttpService, public toasterService: ToasterService) {
    this.loadList();
  }

  ngOnInit() {
    this.settings = {
      columns: {
        id: {
          title: 'id'
        },
        phrase: {
          title: 'phrase'
        },
        word_word: {
          title: 'word'
        },
        etymos_version_test: {
          title: 'etymos_version_test'
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
    const url = 'tests';
    this.testList = [];
    this.httpService.get(url).subscribe(data => {
      this.testList = [];
      const testList = data as Array<Test>;
      for (const test of testList) {
        this.testList.push(new Test(test));
      }
    });
  }
}
