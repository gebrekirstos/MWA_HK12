import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector:"custom-counter",
    template:`
    <h1> Angular 2 : Exercise - One </h1>
     <button (click)="decrement()">-</button>
     <span> {{counter}} </span>
     <button (click)="increment()"> + </button>
    `
})
export class CustomCounterComponent{
    counterValue=0;
    get counter(){
        return this.counterValue;
    }
    set counter(value){
        this.counterValue=value;
    }
    increment(){
        this.counter++;
    }
    decrement(){
        this.counter--;
    }
}