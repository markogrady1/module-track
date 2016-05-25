import {Component} from 'angular2/core';
import {HeaderComponent} from './header/header.component';
import {ModuleComponent} from './module.component';
import {YearComponent} from './years/years.component'


@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives:[ModuleComponent,HeaderComponent, YearComponent]
})

export class AppComponent {
    public moduleGradeOne:string;
    public moduleWeightOne:string;
    public moduleGradeTwo:string;
    public moduleWeightTwo:string;

    public mainTitle:string = "Enter Module Data"
   
   public outPut() {
       if(this.moduleGradeOne != "") {
           console.log("output", this.moduleGradeOne)
       }
        if(this.moduleWeightOne != "") {
           console.log("output", this.moduleGradeOne)
       }
        if(this.moduleGradeTwo != "") {
           console.log("output", this.moduleGradeOne)
       }
        if(this.moduleWeightTwo != "") {
           console.log("output", this.moduleGradeOne)
       }
   }
}
