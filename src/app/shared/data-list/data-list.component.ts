import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.less', '../../common.less']
})
export class DataListComponent {

  @Input()
  datas: any[] = [];

  open(url) {
    window.location.href = url;
  }
}
