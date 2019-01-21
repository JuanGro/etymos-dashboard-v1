import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Test } from './../../models/test';
import { Word } from 'src/models/word';
import { HttpService } from 'src/services/http.service';
import { Option } from 'src/models/option';
import { ToasterService } from 'src/services/toaster.service';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html'
})
export class TestFormComponent implements OnInit {
    public etymos_versions: string[];
    public test: Test;
    @Input() word: Word;

    constructor(public httpService: HttpService, private toasterService: ToasterService) {}

    ngOnInit() {
        this.etymos_versions = ['lite', 'pro', 'med'];
        this.reset();
    }

    public reset() {
        this.test = new Test();
    }

    public onSubmit(test: Test) {
        test.word_id = this.word.id;
        this.sendNewTestToAPI(test);
    }

    public sendNewTestToAPI(test: Test) {
        const url = 'tests';
        this.httpService.post(url, test)
            .subscribe(
                testSerialized => {
                    const newTest = new Test(testSerialized);
                    this.createCorrectOption(newTest.id);
                    this.createIncorrectOption(this.test.incorrect_option1, newTest.id);
                    this.createIncorrectOption(this.test.incorrect_option2, newTest.id);
                    this.toasterService.showSuccess('Test', 'El test fue creado con éxito');
                }
            );
    }

    public createCorrectOption(testAux_id: number) {
        const option = new Option({word_option: this.word.word_word, correct: true, test_id: testAux_id});
        this.sendNewOptionToAPI(option, 'La opción correcta fue creada con éxito');
    }

    public createIncorrectOption(option_string: string, testAux_id: number) {
        const option = new Option({word_option: option_string, correct: false, test_id: testAux_id});
        this.sendNewOptionToAPI(option, 'La opción incorrecta: ' + option_string + ' fue creada con éxito');
    }

    public sendNewOptionToAPI(option: Option, message_alert: string) {
        const url = 'options';
        this.httpService.post(url, option)
            .subscribe(
                data => {
                    this.toasterService.showSuccess('Opción', message_alert);
                }
            );
    }
}
