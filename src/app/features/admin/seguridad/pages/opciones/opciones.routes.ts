import { Routes } from '@angular/router';

export const opcionesRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
    },
    {
        path: 'list',
        loadComponent: () => import('./list/list.component'),
    },
    /*{
        path: 'edit',
        loadComponent: () => import('./edit/edit.component'),
    },*/
    /*{
        path: 'details',
        loadComponent: () => import('./details/details.component'),
    }*/
];

export default opcionesRoutes;