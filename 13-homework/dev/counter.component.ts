import {Component, Input} from "angular2/core";

@Component({
    selector:"counter",
    template:`
    <div class="todo">
    <input value="{{count}}" [(ngModel)]="count" />
    <button type="button" (click)="decrement();"> - </button>
    <span> {{count}} </span>
    <button type="button" (click)="increment();"> + </button>
    </div>
    `
})

export class CounterComponent{
    @Input()
    count:number=0
    increment(){
        this.count++;
    }
    decrement(){
        this.count--;
    }

}