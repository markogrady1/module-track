import {Component} from 'angular2/core';


@Component({
    selector: "module",
    templateUrl: "app/ts/module.component.html",
    styleUrls: ["app/ts/module.component.css"],
    inputs:["calculatedAmount"]
})

export class ModuleComponent {
   moduleGrade1:number = 0;
   moduleWeight1:number = 0;
   output:number = 0;
   public calculatedAmount: number = 10;
    
    validateGrade(field1, otherField) {
        field1.value = field1.value > 100 ? 100 : field1.value;
        field1.value = field1.value < 0 ? 0 : field1.value;
        this.moduleGrade1 = field1.value
        this.output = (this.moduleGrade1 * otherField.value) / 100
    }
    
     validateWeight(field1, otherField) {
        field1.value = field1.value > 100 ? 100 : field1.value;
        field1.value = field1.value < 0 ? 0 : field1.value;
        this.moduleWeight1 = field1.value
        this.output = (this.moduleWeight1 * otherField.value) / 100
    }
}