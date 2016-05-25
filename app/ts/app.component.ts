import {Component} from 'angular2/core';
import {HeaderComponent} from './header/header.component';
import {ModuleComponent} from './module.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives:[ModuleComponent,HeaderComponent]
})

export class AppComponent {
    public mainTitle:string = "Enter Module Data"
   
}
