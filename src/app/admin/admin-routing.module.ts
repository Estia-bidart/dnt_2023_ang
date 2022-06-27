import { ContentChild, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlayoutComponent } from './alayout/alayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
    { 
        path: '', component: AlayoutComponent, children:[
            { path: '', redirectTo: 'dashboard', pathMatch: 'full'},

            { path: 'dashboard', component: DashboardComponent},
            {
                path: 'users', loadChildren: () => import('./user/user.module')
                    .then(m => m.UserModule)
            },
            {
                path: 'cocktails', loadChildren: () => import('./cocktail/cocktail.module')
                    .then(m => m.CocktailModule)
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
