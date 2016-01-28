System.register(['angular2/core', './todo.component', './TodoService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_component_1, TodoService_1;
    var TodosComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_component_1_1) {
                todo_component_1 = todo_component_1_1;
            },
            function (TodoService_1_1) {
                TodoService_1 = TodoService_1_1;
            }],
        execute: function() {
            TodosComponent = (function () {
                //todoService:TodoService
                //todosExternal: any
                function TodosComponent(todoService) {
                    this.todoService = todoService;
                    //this.todoService.fetchTodos().subscribe(d => this.todosExternal = d);
                }
                TodosComponent.prototype.logTodos = function () {
                    this.todoService.todos[0].name = "Are you serious ?";
                    //console.log(this.todoService, this.todos, "r");
                };
                TodosComponent = __decorate([
                    core_1.Component({
                        selector: 'todos',
                        providers: [TodoService_1.TodoService]
                    }),
                    core_1.View({
                        directives: [todo_component_1.TodoComponent],
                        //
                        template: "\n    <todo [todo]=\"{name: 'OceanBay'}\"></todo>\n        <button (click)=\"logTodos()\">LogOUT</button>\n        <div *ngFor=\"#todo of todoService.todos\">\n            <todo [todo]=\"todo\"></todo>\n            <todo [todo]=\"todo\"></todo>\n          <label>Name: </label><input type=\"text\" [(ngModel)]=\"todo.name\">\n        </div>\n        {{todoService.one | json}}\n        <label>Name: </label><input type=\"text\" [(ngModel)]=\"todoService.one.name\">\n        <button (click)=\"todoService.one.finish()\">Log</button>\n\n\n\n    "
                    }), 
                    __metadata('design:paramtypes', [TodoService_1.TodoService])
                ], TodosComponent);
                return TodosComponent;
            })();
            exports_1("TodosComponent", TodosComponent);
        }
    }
});
//# sourceMappingURL=todos.component.js.map