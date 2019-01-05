import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Test } from './../../models/test';
import { Word } from 'src/models/word';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html'
})
export class TestFormComponent implements OnInit{
    public etymos_versions: string[];
    public test: Test;
    @Input() word: Word;

    ngOnInit() {
        this.etymos_versions = ['lite', 'pro', 'med'];
        this.reset();
    }

    ngOnChanges() {
        console.log(this.word);
    }

    public reset() {
        this.test = new Test();
    };

    public onSubmit(test: Test) {
        console.log(test);
    };
}