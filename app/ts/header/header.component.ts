import {Component} from "angular2/core"

@Component({
    selector: "header",
    templateUrl: "app/ts/header/header.component.html",
    styleUrls: ["app/ts/header/header.component.css"]
    
})

export class HeaderComponent {
    public headerTitle:string = "Module Calculator";
}