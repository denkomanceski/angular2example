System.register(['angular2/platform/browser', './todos.component', 'angular2/http'], function(exports_1) {
    var browser_1, todos_component_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (todos_component_1_1) {
                todos_component_1 = todos_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(todos_component_1.TodosComponent, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=boot.js.map