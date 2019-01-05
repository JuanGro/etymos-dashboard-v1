import { Component, OnInit } from '@angular/core';
import { Word }    from './../../models/word';

@Component({
  selector: 'app-word-form',
  templateUrl: './word-form.component.html'
})
export class WordFormComponent implements OnInit{
    public etymos_versions: string[];
    public submitted: boolean;
    public model: Word;

    ngOnInit() {
        this.etymos_versions = ['lite', 'pro', 'med'];
        this.submitted = false;
        this.model = new Word();
    }

    public onSubmit() {
        this.submitted = true; 
    };

    public reset() {
        this.model = new Word();
    };
}