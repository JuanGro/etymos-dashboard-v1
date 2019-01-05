import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Word } from './../../models/word';
import { HttpService } from './../../services/http.service';

@Component({
  providers: [HttpService],
  selector: 'app-word-form',
  templateUrl: './word-form.component.html'
})
export class WordFormComponent implements OnInit{
    public etymos_versions: string[];
    public word: Word;
    @Output() newWord = new EventEmitter<Word>();

    constructor(public httpService: HttpService) {}

    ngOnInit() {
        this.etymos_versions = ['lite', 'pro', 'med'];
        this.reset();
    }

    public reset() {
        this.word = new Word();
    };

    public onSubmit(word: Word) {
        this.newWord.emit(word);
        // this.sendDataToAPI(word);
    };

    public sendDataToAPI(word: Word) {
        const url = 'words';
        this.httpService.post(url, word)
            .subscribe(
                data => console.log(data)
            );
    }
}