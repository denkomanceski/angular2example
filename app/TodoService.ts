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

    todos:Todo[] = [];
    one:Todo = new Todo("Test", "Smth", true)
    url:string = 'http://localhost:3000/todos';
    //externalTodos:Array<Todo>;

    constructor(public http:Http) {

        this.http.get('http://localhost:3000/todos')
            .map(t => t.json())
            .subscribe(data => {
                data.forEach(function (todo) {
                    this.todos.push(new Todo(todo.name, todo.description, todo.finished))
                }, this)
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