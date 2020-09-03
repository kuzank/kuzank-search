import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CollectionListComponent} from './shared/collection/collection-list.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path: '', component: AppComponent, pathMatch: 'full'},
  {path: 'collection', component: CollectionListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
