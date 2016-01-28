import {bootstrap} from 'angular2/platform/browser'
import {TodosComponent} from './todos.component'
import {HTTP_PROVIDERS} from 'angular2/http'
bootstrap(TodosComponent, [HTTP_PROVIDERS]);

