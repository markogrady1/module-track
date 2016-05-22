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
    static count:number = 0
    doSomething(moduleId:number, moduleName:string, courseName:string, desc:string) {
        this.moduleId = moduleId;
        this.moduleName = moduleName;
        this.courseName = courseName;
        this.desc = desc;
    }
     clicker(val) {
         var item = document.getElementsByClassName("item")
      var txt = document.getElementsByClassName("module-txt")
      txt[0].value = val.target.id
         
        console.log(val.target)
    }
}