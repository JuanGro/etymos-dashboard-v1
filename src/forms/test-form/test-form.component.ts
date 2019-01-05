import { Component, OnInit } from '@angular/core';
import { Test } from './../../models/test';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html'
})
export class TestFormComponent implements OnInit{
    public etymos_versions: string[];
    public model: Test;

    ngOnInit() {
        this.etymos_versions = ['lite', 'pro', 'med'];
        this.reset();
    }

    public reset() {
        this.model = new Test();
    };

    public onSubmit(model: Test) {
        console.log(model);
    };
}