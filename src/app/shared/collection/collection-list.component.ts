import {Component, Input} from '@angular/core';
import {COLLECTION_DATA} from '../../../data/collection';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.less', '../../common.less']
})
export class CollectionListComponent {

  @Input()
  datas: any[] = COLLECTION_DATA;

  open(url) {
    window.location.href = url;
  }
}
