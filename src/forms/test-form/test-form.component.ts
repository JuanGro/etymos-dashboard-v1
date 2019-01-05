import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Test } from './../../models/test';
import { Word } from 'src/models/word';
import { HttpService } from 'src/services/http.service';
import { Option } from 'src/models/option';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html'
})
export class TestFormComponent implements OnInit{
    public etymos_versions: string[];
    public test: Test;
    public testSerialized: Test;
    @Input() word: Word;

    constructor(public httpService: HttpService) {}

    ngOnInit() {
        this.etymos_versions = ['lite', 'pro', 'med'];
        this.reset();
    }

    ngOnChanges() {}

    public reset() {
        this.test = new Test();
    };

    public onSubmit(test: Test) {
        test.word_id = this.word.id;
        this.sendNewTestToAPI(test);
    };

    public sendNewTestToAPI(test: Test) {
        const url = 'tests';
        this.httpService.post(url, test)
            .subscribe(
                testSerialized => {
                    this.testSerialized = new Test(testSerialized);
                    this.createCorrectOption(this.testSerialized.id);
                    this.createIncorrectOption(this.test.incorrect_option1, this.testSerialized.id);
                    this.createIncorrectOption(this.test.incorrect_option2, this.testSerialized.id);
                }
            );
    }

    public createCorrectOption(testAux_id: number) {
        const option = new Option({word_option: this.word.word_word, correct: true, test_id: testAux_id});
        this.sendNewOptionToAPI(option);
    }

    public createIncorrectOption(option_string: string, testAux_id: number) {
        const option = new Option({word_option: option_string, correct: false, test_id: testAux_id});
        this.sendNewOptionToAPI(option);
    }

    public sendNewOptionToAPI(option: Option) {
        const url = 'options';
        this.httpService.post(url, option)
            .subscribe(
                data => console.log(data)
            );
    }
}