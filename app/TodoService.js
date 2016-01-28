System.register(['angular2/http', "angular2/core", "./Todo", 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, Todo_1;
    var TodoService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Todo_1_1) {
                Todo_1 = Todo_1_1;
            },
            function (_1) {}],
        execute: function() {
            TodoService = (function () {
                //externalTodos:Array<Todo>;
                function TodoService(http) {
                    //this.http.get('http://localhost:3000/todos')
                    //    .map(t => t.json())
                    //    .subscribe(d => this.todos = d, err => {console.log(err)}, () => {
                    //        this.todos.forEach(function(todo){
                    //            externalTodos.push(new Todo(todo.name, todo.description, todo.finished))
                    //        })
                    //        this.todos = externalTodos;
                    //        console.log(this.todos);
                    //    })
                    var _this = this;
                    this.http = http;
                    this.one = new Todo_1.Todo("Test", "Smth", true);
                    this.url = 'http://localhost:3000/todos';
                    this.http.get('http://localhost:3000/todos')
                        .map(function (t) { return t.json(); })
                        .subscribe(function (d) {
                        var externalTodos = [];
                        d.forEach(function (todo) {
                            externalTodos.push(new Todo_1.Todo(todo.name, todo.description, todo.finished));
                        });
                        externalTodos.push("t");
                        _this.todos = externalTodos;
                        console.log(_this.todos);
                    });
                }
                TodoService.prototype.addTodo = function () {
                    //this.http.post(this.url)
                };
                TodoService.prototype.fetchTodos = function () {
                    return this.http.get('http://localhost:3000/todos')
                        .map(function (t) { return t.json(); });
                };
                TodoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TodoService);
                return TodoService;
            })();
            exports_1("TodoService", TodoService);
        }
    }
});
//# sourceMappingURL=TodoService.js.map