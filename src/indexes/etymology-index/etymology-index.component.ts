import { Component, OnInit, OnChanges } from '@angular/core';
import { Etymology } from '../../models/etymology';
import { HttpService } from '../../services/http.service';
import { ToasterService } from 'src/services/toaster.service';

@Component({
  providers: [HttpService],
  selector: 'app-etymology-index',
  templateUrl: './etymology-index.component.html'
})
export class EtymologyIndexComponent implements OnInit, OnChanges {
  public settings: any;
  public etymologyList: Array<Etymology>;

  constructor(private httpService: HttpService, public toasterService: ToasterService) {
    this.loadList();
  }

  ngOnInit() {
    this.settings = {
      columns: {
        id: {
          title: 'id'
        },
        type_etymology: {
          title: 'type_etymology'
        },
        language: {
          title: 'language'
        },
        graeco_latin_etymology: {
          title: 'graeco_latin_etymology'
        },
        pattern: {
          title: 'pattern'
        },
        meaning_etymology: {
          title: 'meaning_etymology'
        },
        image_etymology: {
          title: 'image_etymology'
        },
        etymos_version_etymology: {
          title: 'etymos_version_etymology'
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
    const url = 'etymologies';
    this.etymologyList = [];
    this.httpService.get(url).subscribe(data => {
      this.etymologyList = data as Array<Etymology>;
    });
  }
}
