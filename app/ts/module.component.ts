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
    moduleGrade2:number = 0;
    moduleWeight2:number = 0;
    moduleListItem:ModuleComponent;
    moduleId:number;
    moduleName:string;
    courseName:string;
    desc:string;
    markAwarded:number;
    numCourseworks:number;
    static count:number = 0;
   public calculatedAmount: number = 10;
    
    
    addModule(moduleId:number, moduleName:string, courseName:string, desc:string, markAwarded:number, numCourseworks:number) {
        this.moduleId = moduleId;
        this.moduleName = moduleName;
        this.courseName = courseName;
        this.desc = desc;
        this.markAwarded = markAwarded;
        this.numCourseworks = numCourseworks;
        
    }
     clicker(val) {
        var item = document.getElementsByClassName("item")
        var txt = document.getElementsByClassName("module-txt")
        // txt[0].value = val.target.id 
        console.log(val.target)
    }
    
    validateAmount(field) {
        field.value = field.value > 100 ? 100 : field.value;
        field.value = field.value < 0 ? 0 : field.value;
             console.log(this.moduleGrade1)

    }
    
    //    validateSecondFieldsAmount(field) {
    //     field.value = field.value > 100 ? 100 : field.value;
    //     field.value = field.value < 0 ? 0 : field.value;
    //     this.secondModule = field.value;
    // }
    
    private calculateAverage() {
     
    }
}