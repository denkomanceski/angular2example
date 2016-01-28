/**
 * Created by denko on 1/25/2016.
 */
import {Component, View} from 'angular2/core'
import {TodoComponent} from './todo.component'
import {TodoService} from './TodoService'
import {Todo} from "./Todo";


@Component({
    selector: 'todos',
    providers: [TodoService]
})
@View({
    directives: [TodoComponent],
    //
    template: `
    <todo [todo]="{name: 'OceanBay'}"></todo>
        <button (click)="logTodos()">LogOUT</button>
        <div *ngFor="#todo of todoService.todos">
            <todo [todo]="todo"></todo>
            <todo [todo]="todo"></todo>
          <label>Name: </label><input type="text" [(ngModel)]="todo.name">
        </div>
        {{todoService.one | json}}
        <label>Name: </label><input type="text" [(ngModel)]="todoService.one.name">
        <button (click)="todoService.one.finish()">Log</button>



    `
})
export class TodosComponent {
    //todoService:TodoService

    //todosExternal: any
    constructor(public todoService?: TodoService) {

        //this.todoService.fetchTodos().subscribe(d => this.todosExternal = d);
    }
    logTodos(){
            this.todoService.todos[0].name = "Are you serious ?"
        //console.log(this.todoService, this.todos, "r");
    }

}


