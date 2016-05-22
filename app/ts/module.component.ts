import {Component} from 'angular2/core';
import {ModuleListComponent} from './moduleList.component'

@Component({
    selector: "module",
    templateUrl: "app/ts/module.component.html",

})

export class ModuleComponent {
    moduleId:number;
    moduleName:string;
    courseName:string;
    desc:string;
    markAwarded:number;
    numCourseworks:number;
    static count:number = 0
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
      txt[0].value = val.target.id
         
        console.log(val.target)
    }
}