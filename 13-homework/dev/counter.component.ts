import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
    selector:"counter",
    template:`
    <h1> Angular 2 : Exercise - Two & Three</h1>
    <div class="todo">
    <input value="{{counterValue}}" [(ngModel)]="counterValue" />
    <button type="button" (click)="decrement();"> - </button>
    <button type="button" (click)="increment();"> + </button>
    <p> counter value = {{counterValue}} </p>
    </div>
    `,
     styles:['p.red:{color:red;}']
})

export class CounterComponent{
    @Input()counterValue:number=10
    @Output() counterChange = new EventEmitter();
    increment(){
        this.counterValue++;
        this.counterChange.emit({
            value:this.counterValue
        })
    }
    decrement(){
        this.counterValue--;
        this.counterChange.emit({
            value:this.counterValue
        })
    }
    getTrue(){
        return true;
    }
}