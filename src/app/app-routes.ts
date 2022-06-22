import { Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
export const routes: Routes = [
    {
        path: 'todos',
        loadComponent: () => import('./todos/todos.component').then(
            (m) => m.TodosComponent
          )
    },
    {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
    }
];