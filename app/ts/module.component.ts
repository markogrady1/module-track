import {Component} from 'angular2/core';
import {ModuleListComponent} from './moduleList.component'

@Component({
    selector: "module",
    templateUrl: "app/ts/module.component.html",
  
})

export class Module {
    static count:number = 0
     clicker(val) {
         var item = document.getElementsByClassName("item")
      var txt = document.getElementsByClassName("module-txt")
      txt[0].value = val.target.id
         
        console.log(val.target)
    }
}