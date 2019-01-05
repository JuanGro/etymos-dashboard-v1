import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Word } from './../../models/word';
import { HttpService } from './../../services/http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  providers: [HttpService],
  selector: 'app-word-form',
  templateUrl: './word-form.component.html'
})
export class WordFormComponent implements OnInit{
    public etymos_versions: string[];
    public word: Word;
    @Output() newWord = new EventEmitter<Word>();

    constructor(public httpService: HttpService, private toastr: ToastrService) {}

    ngOnInit() {
        this.etymos_versions = ['lite', 'pro', 'med'];
        this.reset();
        this.showSuccess();
    }

    public showSuccess() {
        this.toastr.success('Hello world!', 'Toastr fun!');
    }

    public reset() {
        this.word = new Word();
    };

    public onSubmit(word: Word) {
        this.sendDataToAPI(word);
    };

    public sendDataToAPI(word: Word) {
        const url = 'words';
        this.httpService.post(url, word)
            .subscribe(
                wordSerialized => this.newWord.emit(new Word(wordSerialized))
            );
    }
}