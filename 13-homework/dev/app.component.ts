import { Component } from 'angular2/core';
import { CounterComponent } from "./counter.component";
import { CustomCounterComponent } from "./custom.component"

@Component({
    selector: 'my-app',
    template: `
        <custom-counter></custom-counter>
        <counter></counter> <br/><br/>
    `,
    directives:[
        CounterComponent,
        CustomCounterComponent
        ]
})
export class AppComponent {
}