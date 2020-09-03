import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {DataListComponent} from './data-list/data-list.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {CollectionListComponent} from './collection/collection-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    DataListComponent,
    TodoListComponent,
    CollectionListComponent
  ],
  exports: [
    DataListComponent,
    TodoListComponent,
    CollectionListComponent
  ],
  entryComponents: [],
})
export class SharedModule {
}
