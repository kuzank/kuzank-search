import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less', '../../common.less']
})
export class TodoListComponent {

  @Input()
  datas: any[] = [];

  open(url) {
    window.location.href = url;
  }
}
