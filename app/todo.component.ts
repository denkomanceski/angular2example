/**
 * Created by denko on 1/25/2016.
 */
import {Component, Input} from 'angular2/core'
import {Todo} from "./Todo";

@Component({
    selector: 'todo',
    template: `
        <div>
        <h3>{{todo.name}}</h3>
        <textarea #forceful (keydown.space)="todo.name = 'Bill Clinton'; todo.description='Queen of mexico'">Change Name of {{todo.name}} and {{todo.description}}</textarea>
        <button (click)="forceful.focus()">Focus the textarea lol</button>
        <p>{{todo.description}}</p>
        <p (click)="changeState(todo)" >{{todo.finished}}</p>
        <button (click)="todo.finish()">Finish Core</button>
        <button (click)="logMe()">LogMe</button>
        <button (click)="changeState(todo)">{{todo.finished}}</button>
        <input type="text" [(ngModel)]="wtf.color"/>
        <input type="text" [(ngModel)]="wtf.size"/>
        <p [style.color]="wtf.color" [style.font-size]="wtf.size" >Hello World</p>
        </div>
    `
})

export class TodoComponent {
    @Input()todo:Todo;
    color:any = "Red";
    size:any = '50px';
    wtf:any = {
        "color": "Red",
        "size": "30px"
    }
    changeState(todo){
        todo.finished = !todo.finished;
    }
    logMe(){
        this.todo.finish();
        console.log(this.todo);
    }

}

