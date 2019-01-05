import { Component, Input, OnInit } from '@angular/core';
import { Etymology } from './../../models/etymology';
import { Word } from 'src/models/word';

@Component({
  selector: 'app-etymology-form',
  templateUrl: './etymology-form.component.html'
})
export class EtymologyFormComponent implements OnInit{
    public etymos_versions: string[];
    public etymologies_type: string[];
    public languages: string[];
    public etymology: Etymology;
    @Input() word: Word;

    ngOnInit() {
        this.etymos_versions = ['lite', 'pro', 'med'];
        this.etymologies_type = ['prefix', 'suffix', 'root'];
        this.languages = ['greek', 'latin'];
        this.reset();
    }

    ngOnChanges() {}

    public reset() {
        this.etymology = new Etymology();
    };

    public onSubmit(etymology: Etymology) {
        console.log(etymology);
    };
}