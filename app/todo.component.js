System.register(['angular2/core', "./Todo"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Todo_1;
    var TodoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Todo_1_1) {
                Todo_1 = Todo_1_1;
            }],
        execute: function() {
            TodoComponent = (function () {
                function TodoComponent() {
                    this.color = "Red";
                    this.size = '50px';
                    this.wtf = {
                        "color": "Red",
                        "size": "30px"
                    };
                }
                TodoComponent.prototype.changeState = function (todo) {
                    todo.finished = !todo.finished;
                };
                TodoComponent.prototype.logMe = function () {
                    this.todo.finish();
                    console.log(this.todo);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Todo_1.Todo)
                ], TodoComponent.prototype, "todo", void 0);
                TodoComponent = __decorate([
                    core_1.Component({
                        selector: 'todo',
                        template: "\n        <div>\n        <h3>{{todo.name}}</h3>\n        <textarea #forceful (keydown.space)=\"todo.name = 'Bill Clinton'; todo.description='Queen of mexico'\">Change Name of {{todo.name}} and {{todo.description}}</textarea>\n        <button (click)=\"forceful.focus()\">Focus the textarea lol</button>\n        <p>{{todo.description}}</p>\n        <p (click)=\"changeState(todo)\" >{{todo.finished}}</p>\n        <button (click)=\"todo.finish()\">Finish Core</button>\n        <button (click)=\"logMe()\">LogMe</button>\n        <button (click)=\"changeState(todo)\">{{todo.finished}}</button>\n        <input type=\"text\" [(ngModel)]=\"wtf.color\"/>\n        <input type=\"text\" [(ngModel)]=\"wtf.size\"/>\n        <p [style.color]=\"wtf.color\" [style.font-size]=\"wtf.size\" >Hello World</p>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoComponent);
                return TodoComponent;
            })();
            exports_1("TodoComponent", TodoComponent);
        }
    }
});
//# sourceMappingURL=todo.component.js.map