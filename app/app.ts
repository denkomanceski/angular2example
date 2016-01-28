/**
 * Created by denko on 1/25/2016.
 */
import {Component} from 'angular2/core';
import {TodosComponent} from './todos.component'
@Component({
    selector: 'todo-app',
    directives: [TodosComponent],
    template:`
        <h3>Hello World</h3>
        <todos></todos>
    `
})

export class TodoApp{
    something: String;
    constructor(){
        this.something = "Denko wonderland lol"
    }
}