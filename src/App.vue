<template>
  <div id="app" class="d-flex">
    <div class="left-container width-200">
      <DataItem v-show="leftVisiable" v-bind:datas="leftData"></DataItem>
    </div>

    <div class="flex-1">
      <div class="header-container d-flex justify-content-around">
        <div class="flex-1"></div>
        <div class="flex-1">
          <h1 class="logo point" @click="showSearchTip">Do You Feel Lucky?</h1>
        </div>
        <div class="flex-1 d-flex justify-content-end"></div>
      </div>

      <div class="search-container d-flex justify-content-around">
        <div class="flex-1">
        </div>
        <div class="search-content">
          <div class="search-items d-flex justify-content-between">
            <div class="d-flex">
              <div v-for="(item,i) in searchItems" :key="i" @click="searchItemChange(i)"
                   class="search-item point border border-radius-4" :class="{'active' : searchItemIndex === i}">
                {{ item.title }}
              </div>
            </div>
            <div>
              <el-tag class="point" size="small" effect="dark" :type="leftVisiable ? 'danger' : 'info'"
                      @click="toggleLeftVisiableBtn" style="margin-right: 6px">左
              </el-tag>
              <el-tag class="point" size="small" effect="dark" :type="rightVisiable ? 'danger' : 'info'"
                      @click="toggleRightVisiableBtn" style="margin-right: 6px">右
              </el-tag>
              <el-tag class="point" size="small" effect="dark" :type="centerVisiable ? 'danger' : 'info'"
                      @click="toggleCenterVisiableBtn" style="margin-right: 6px">中
              </el-tag>
              <el-tag class="point" size="small" effect="dark" :type="bottomVisiable ? 'danger' : 'info'"
                      @click="toggleBottomVisiableBtn" style="margin-right: 6px">TODO
              </el-tag>
              <el-tag class="point" size="small" effect="dark" :type="thinkingVisiable ? 'danger' : 'info'"
                      @click="toggleThinkingVisiableBtn" style="margin-right: 6px">思想
              </el-tag>
              <el-tag class="point" size="small" effect="dark" type="success"
                      @click="collectionVisiable = true" style="margin-right: 6px">收藏
              </el-tag>
              <el-tag class="point" size="small" effect="dark" type="success"
                      @click="toolVisiable = true">工具
              </el-tag>
            </div>
          </div>
          <el-input v-model="searchValue" :clearable="true" autofocus
                    @input="searchValueChange"
                    @keydown.enter.native="toggleSearch">
            <el-button slot="append" @click="toggleSearch">Search</el-button>
          </el-input>
        </div>
        <div class="flex-1"></div>
      </div>

      <div v-if="centerVisiable" class="content-container d-flex justify-content-center">
        <div class="data d-flex">
          <div class="flex-1">
            <DataItem v-bind:datas="firstTools"></DataItem>
          </div>
          <div class="flex-1">
            <DataItem v-bind:datas="secondTools"></DataItem>
          </div>
          <div class="flex-1">
            <DataItem v-bind:datas="thirdTools"></DataItem>
          </div>
          <div class="flex-1">
            <DataItem v-bind:datas="fourthTools"></DataItem>
          </div>
        </div>
      </div>

      <div class="bottom-container d-flex justify-content-center">
        <div class="d-flex justify-content-between" style="width: 800px">
          <div v-show="bottomVisiable" class="data">
            <Todo v-bind:datas="bottomData"></Todo>
          </div>

          <div v-show="thinkingVisiable" class="data">
            <Todo v-bind:datas="thinkingData"></Todo>
          </div>
        </div>
      </div>
    </div>

    <div class="right-container width-200">
      <DataItem v-show="rightVisiable" v-bind:datas="rightData"></DataItem>
    </div>

    <el-drawer title=""
               :visible.sync="collectionVisiable"
               direction="ttb"
               append-to-body
               size="100%"
               :before-close="closeCollectionDrawer">
      <Collection></Collection>
    </el-drawer>

    <el-drawer title=""
               :visible.sync="toolVisiable"
               direction="ttb"
               append-to-body
               size="100%"
               :before-close="closeToolDrawer">
      <Tool></Tool>
    </el-drawer>
  </div>
</template>

<script>

import DataItem from "@/components/DataItem";
import {
  BOTTON_DATA,
  FIRST_DATA,
  FOURTH_DATA,
  LEFT_DATA,
  RIGHT_DATA,
  SEARCH_ITEMS,
  SECOND_DATA,
  THIRD_DATA
} from "@/data/constant";
import Todo from "@/components/Todo";
import Collection from "@/components/Collection";
import Tool from "@/components/Tool";
import {THINKINKG_DATA} from "@/data/thinking";

export default {
  name: 'app',
  components: {Tool, Collection, Todo, DataItem},
  data() {
    return {
      searchValue: '',
      searchItemIndex: 0,
      height: 0,
      // visiable
      leftVisiable: true,
      rightVisiable: true,
      centerVisiable: true,
      bottomVisiable: true,
      settingVisiable: false,
      collectionVisiable: false,
      thinkingVisiable: true,
      toolVisiable: false,

      searchItems: SEARCH_ITEMS,
      leftData: LEFT_DATA,
      rightData: RIGHT_DATA,
      firstTools: FIRST_DATA,
      secondTools: SECOND_DATA,
      thirdTools: THIRD_DATA,
      fourthTools: FOURTH_DATA,
      bottomData: BOTTON_DATA,
      thinkingData: THINKINKG_DATA,
    }
  },
  mounted() {
    this.loadSearchValueFromLocalStorage();
    this.loadVisiableFormLocalStorage();

    this.height = window.innerHeight;
  },
  methods: {
    toggleSearch() {
      console.log('toggleSearch : ' + this.searchValue)
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
        window.location.href = link;
      }
    },
    searchItemChange(index) {
      this.searchItemIndex = index;
      window.localStorage.setItem('SearchIndex', index);
    },
    searchValueChange() {
      window.localStorage.setItem('SearchValue', this.searchValue);
    },
    loadSearchValueFromLocalStorage() {
      const str = window.localStorage.getItem('SearchValue');
      if (str) {
        this.searchValue = str;
      }
      const index = window.localStorage.getItem('SearchIndex');
      if (index) {
        this.searchItemIndex = parseInt(index);
      }
    },
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
      const bottom = window.localStorage.getItem('bottomVisiable');
      if (bottom && bottom === 'false') {
        this.bottomVisiable = false;
      }
      const thinking = window.localStorage.getItem('thinkingVisiable');
      if (thinking && thinking === 'false') {
        this.thinkingVisiable = false;
      }
    },
    toggleLeftVisiableBtn() {
      this.leftVisiable = !this.leftVisiable;
      window.localStorage.setItem('leftVisiable', String(this.leftVisiable));
    },
    toggleRightVisiableBtn() {
      this.rightVisiable = !this.rightVisiable;
      window.localStorage.setItem('rightVisiable', String(this.rightVisiable));
    },
    toggleCenterVisiableBtn() {
      this.centerVisiable = !this.centerVisiable;
      window.localStorage.setItem('centerVisiable', String(this.centerVisiable));
    },
    toggleBottomVisiableBtn() {
      this.bottomVisiable = !this.bottomVisiable;
      window.localStorage.setItem('bottomVisiable', String(this.bottomVisiable));
    },
    toggleThinkingVisiableBtn() {
      this.thinkingVisiable = !this.thinkingVisiable;
      window.localStorage.setItem('thinkingVisiable', String(this.thinkingVisiable));
    },
    closeCollectionDrawer() {
      this.collectionVisiable = false;
    },
    closeToolDrawer() {
      this.toolVisiable = false;
    },
    showSearchTip(){
       this.$notify({
          title: '🔍 搜索技巧',
          duration: 40000,
          dangerouslyUseHTMLString: true,
          message: 
          '<p>① 精确搜索：双引号</p>' + 
          '<p>② 条件查询：and / or / 空格 / + / - </p>' +
          '<p>③ 组合查询：小括号()</p>' + 
          '<p>④ 文件格式：filetype:关键字</p>' +
          '<p>⑤ 域名查询：site:关键字</p>' +
          '<p>⑥ 页面标题：intitle/allintitle</p>' +
          '<p>⑦ 网页正文：intext/allintext</p>' +
          '<p>⑧ URL地址：inurl/allinurl</p>' +
          '<p>🌰 filetype:pdf SEO</p>' +
          '<p>🚀 Google支持度比较好</p>'
        });
    }
  }
}
</script>

<style>
@import "./common.css";

#app {
  font-size: 14px;
  line-height: 1.5715;
  background-color: #fff;
  font-feature-settings: 'tnum';
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-variant: tabular-nums;
}

.width-200 {
  width: 200px;
}

@media screen and (max-width: 1200px) {
  .right-container {
    display: none;
  }
}

@media screen and (max-width: 1000px) {

  .left-container, .right-container {
    display: none;
  }
}

.logo {
  padding: 15px 0 10px 0;
  font-size: 48px;
  font-weight: 700;
  width: 600px;
  color: cornflowerblue;
  font-family: "Comic Sans MS", cursive, sans-serif;
  text-align: center;
}

.search-content {
  width: 800px;
}

.search-items {
}

.search-item {
  padding: 1px 4px;
  margin: 3px;
  font-size: 13px;
}

.active {
  color: #da280a;
  font-weight: 600;
  border: 1px solid #da280a;
  border-radius: 4px;
}

.content-container {
}

.bottom-container {
  margin-top: 8px;
}

.el-input /deep/ .el-input-group__append {
  cursor: pointer;
  font-size: 18px;
  color: #fff;
  background-color: #1890ff;
}

.el-drawer /deep/ .el-drawer__header {
  margin-bottom: 0px;
}

.el-drawer /deep/ .el-drawer__body {
  overflow-y: scroll;
}

</style>
