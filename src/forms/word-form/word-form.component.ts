import { Component, OnInit } from '@angular/core';
import { Word } from './../../models/word';

@Component({
  selector: 'app-word-form',
  templateUrl: './word-form.component.html'
})
export class WordFormComponent implements OnInit{
    public etymos_versions: string[];
    public model: Word;

    ngOnInit() {
        this.etymos_versions = ['lite', 'pro', 'med'];
        this.reset();
    }

    public reset() {
        this.model = new Word();
    };

    public onSubmit(model: Word) {
        console.log(model);
    };
}