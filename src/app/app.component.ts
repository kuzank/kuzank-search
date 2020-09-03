import {Component, OnInit} from '@angular/core';
import {
  BOTTON_DATA,
  FIRST_DATA,
  FOURTH_DATA,
  LEFT_DATA,
  RIGHT_DATA,
  SEARCH_ITEMS,
  SECOND_DATA,
  THIRD_DATA
} from '../data/constant';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less', './common.less']
})
export class AppComponent implements OnInit {

  searchValue = '';
  searchItemIndex = 0;
  height = 0;

  // visiable
  leftVisiable = true;
  rightVisiable = true;
  centerVisiable = true;
  bottomBisiable = true;
  settingVisiable = false;
  collectionVisiable = false;

  searchItems = SEARCH_ITEMS;

  leftData = LEFT_DATA;
  rightData = RIGHT_DATA;
  firstTools = FIRST_DATA;
  secondTools = SECOND_DATA;
  thirdTools = THIRD_DATA;
  fourthTools = FOURTH_DATA;
  bottomData = BOTTON_DATA;


  constructor(private router: Router) {
    this.height = window.innerHeight;
  }

  ngOnInit(): void {
    this.loadSearchValueFromLocalStorage();
    this.loadVisiableFormLocalStorage();
  }

  keyEvent(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.toggleSearch();
    }
  }

  toggleSearch() {
    if (this.searchValue) {
      window.localStorage.setItem('SearchValue', this.searchValue);

      let link = encodeURI(this.searchItems[this.searchItemIndex].link + this.searchValue);
      if (this.searchValue.startsWith('http:') || this.searchValue.startsWith('https:')) {
        link = this.searchValue;
      } else if (this.searchValue.startsWith('localhost')) {
        link = 'http://' + this.searchValue;
      } else if ('gitee.com'.indexOf(this.searchValue) > -1) {
        link = 'https://www.gitee.com';
      } else if ('github.com'.indexOf(this.searchValue) > -1) {
        link = 'https://www.github.com';
      } else if ('youdao'.indexOf(this.searchValue) > -1 || '有道'.indexOf(this.searchValue) > -1) {
        link = 'http://www.youdao.com';
      } else if ('translate.google.cn'.indexOf(this.searchValue) > -1) {
        link = 'https://translate.google.cn';
      }
      // console.log('link : ' + link);
      window.location.href = link;
    }
  }

  searchItemChange(index) {
    this.searchItemIndex = index;
    window.localStorage.setItem('SearchIndex', index);
  }

  loadSearchValueFromLocalStorage() {
    const str = window.localStorage.getItem('SearchValue');
    if (str) {
      this.searchValue = str;
    }

    const index = window.localStorage.getItem('SearchIndex');
    if (index) {
      // tslint:disable-next-line:radix
      this.searchItemIndex = parseInt(index);
    }
  }

  loadVisiableFormLocalStorage() {
    const left = window.localStorage.getItem('leftVisiable');
    if (left && left === 'false') {
      this.leftVisiable = false;
    }
    const right = window.localStorage.getItem('rightVisiable');
    if (right && right === 'false') {
      this.rightVisiable = false;
    }
    const center = window.localStorage.getItem('centerVisiable');
    if (center && center === 'false') {
      this.centerVisiable = false;
    }
    const bottom = window.localStorage.getItem('bottomBisiable');
    if (bottom && bottom === 'false') {
      this.bottomBisiable = false;
    }
  }

  toggleLeftVisiableBtn() {
    this.leftVisiable = !this.leftVisiable;
    window.localStorage.setItem('leftVisiable', String(this.leftVisiable));
  }

  toggleRightVisiableBtn() {
    this.rightVisiable = !this.rightVisiable;
    window.localStorage.setItem('rightVisiable', String(this.rightVisiable));
  }

  toggleCenterVisiableBtn() {
    this.centerVisiable = !this.centerVisiable;
    window.localStorage.setItem('centerVisiable', String(this.centerVisiable));
  }

  toggleBottomVisiableBtn() {
    this.bottomBisiable = !this.bottomBisiable;
    window.localStorage.setItem('bottomBisiable', String(this.bottomBisiable));
  }

  goToCollectionPage() {
    this.router.navigateByUrl('collection');
  }

  closeDrawer() {
    this.collectionVisiable = false;
  }
}
