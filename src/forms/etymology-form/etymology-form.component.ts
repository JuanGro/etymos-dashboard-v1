import { Component, Input, OnInit } from '@angular/core';
import { Etymology } from './../../models/etymology';
import { Word } from 'src/models/word';
import { HttpService } from './../../services/http.service';
import { ToasterService } from 'src/services/toaster.service';
import { WordEtymology } from 'src/models/word_etymology';

@Component({
  selector: 'app-etymology-form',
  templateUrl: './etymology-form.component.html'
})
export class EtymologyFormComponent implements OnInit {
    public etymos_versions: string[];
    public etymologies_type: string[];
    public languages: string[];
    public etymology: Etymology;
    public order_numbers: number[];
    @Input() word: Word;

    constructor(public httpService: HttpService, private toasterService: ToasterService) {}

    ngOnInit() {
        this.etymos_versions = ['lite', 'pro', 'med'];
        this.etymologies_type = ['prefix', 'suffix', 'root'];
        this.languages = ['greek', 'latin'];
        this.order_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.reset();
    }

    public reset() {
        this.etymology = new Etymology();
    }

    public onSubmit(etymology: Etymology) {
        this.sendDataToAPI(etymology);
    }

    public sendDataToAPI(etymology: Etymology) {
        const url = 'find_etymologies';
        this.httpService.post(url, etymology)
            .subscribe(
                etymologySerialized => {
                    const newEtymology = new Etymology(etymologySerialized);
                    this.createWordEtymology(newEtymology.id, this.word.id, etymology.etymology_order);
                    this.toasterService.showSuccess('Etimología', 'La etimología fue creada con éxito');
                }
            );
    }

    public createWordEtymology(etymology_id: number, word_id: number, etymology_order: number) {
        const url = 'word_etymologies';
        this.httpService.post(url, new WordEtymology({
            word_id: word_id,
            etymology_id: etymology_id,
            etymology_order: etymology_order
        })).subscribe(
            data => this.toasterService.showSuccess('Enlace', 'La etimología fue asignada a la palabra correspondiente')
        );
    }
}
