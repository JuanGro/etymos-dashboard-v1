import { Component, OnInit } from '@angular/core';
import { Etymology } from './../../models/etymology';

@Component({
  selector: 'app-etymology-form',
  templateUrl: './etymology-form.component.html'
})
export class EtymologyFormComponent implements OnInit{
    public etymos_versions: string[];
    public etymologies_type: string[];
    public languages: string[];
    public model: Etymology;

    ngOnInit() {
        this.etymos_versions = ['lite', 'pro', 'med'];
        this.etymologies_type = ['prefix', 'suffix', 'root'];
        this.languages = ['greek', 'latin'];
        this.reset();
    }

    public reset() {
        this.model = new Etymology();
    };

    public onSubmit(model: Etymology) {
        console.log(model);
    };
}