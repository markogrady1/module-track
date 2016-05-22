import {Component} from 'angular2/core';
import {HeaderComponent} from './header.component';
import {ModuleComponent} from './module.component';
import {ModuleListComponent} from './moduleList.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives:[ModuleComponent, ModuleListComponent, HeaderComponent]
})

export class AppComponent {
    
    mainTitle = "hello"
   
}
