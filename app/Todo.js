System.register([], function(exports_1) {
    var Todo;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by denko on 1/25/2016.
             */
            Todo = (function () {
                function Todo(name, description, finished) {
                    this.name = name;
                    this.description = description;
                    this.finished = finished;
                }
                Todo.prototype.finish = function () {
                    this.finished = !this.finished;
                };
                return Todo;
            })();
            exports_1("Todo", Todo);
        }
    }
});
//# sourceMappingURL=Todo.js.map