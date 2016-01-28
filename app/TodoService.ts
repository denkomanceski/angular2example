/**
 * Created by denko on 1/25/2016.
 */
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs'
import {Injectable, Inject} from "angular2/core";
import {Todo} from "./Todo";
import 'rxjs/Rx';

@Injectable()
export class TodoService {

    todos:Todo[];
    one:Todo = new Todo("Test", "Smth", true)
    url:string = 'http://localhost:3000/todos';
    //externalTodos:Array<Todo>;

    constructor(public http:Http) {

        //this.http.get('http://localhost:3000/todos')
        //    .map(t => t.json())
        //    .subscribe(d => this.todos = d, err => {console.log(err)}, () => {
        //        this.todos.forEach(function(todo){
        //            externalTodos.push(new Todo(todo.name, todo.description, todo.finished))
        //        })
        //        this.todos = externalTodos;
        //        console.log(this.todos);
        //    })

        this.http.get('http://localhost:3000/todos')
            .map(t => t.json())
            .subscribe(d => {
                let externalTodos = [];
                d.forEach(function (todo) {
                    externalTodos.push(new Todo(todo.name, todo.description, todo.finished))
                })
                externalTodos.push("t");
                this.todos = externalTodos;
                console.log(this.todos)

            });
    }

    addTodo() {
        //this.http.post(this.url)
    }

    fetchTodos() {
        return this.http.get('http://localhost:3000/todos')
            .map(t => t.json())

    }
}