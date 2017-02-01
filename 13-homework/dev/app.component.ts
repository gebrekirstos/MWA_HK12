import {Component} from 'angular2/core';
import {shoppingListComponent} from "./shopping-list.component";
import {CounterComponent} from "./counter.component";

@Component({
    selector: 'my-app',
    template: `
        this is the app Component
        <shopping-list></shopping-list>
        <counter></counter>
    `,
    directives:[shoppingListComponent, CounterComponent]
})
export class AppComponent {

}