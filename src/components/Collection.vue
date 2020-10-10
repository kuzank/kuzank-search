<template>
  <div class="collection-list-container d-flex">
    <div class="width-30"></div>
    <div class="width-10">
      <div class="d-flex border border-radius-4" @click="showAll = true" style="margin: 6px 0;">
        <div class="-title point color-danger" style="padding: 2px"> 全部</div>
      </div>
      <div class="d-flex border border-radius-4" v-for="(item) in datas " :key="item.title" style="margin: 6px 0;">
        <div class="-title point" style="padding: 2px">{{ item.title }}</div>
      </div>
    </div>
    <div class="flex-1 overflow-auto" style="margin-left: 30px">
      <div v-for="(item) in datas " :key="item.title" style="margin-right: 12px"
           v-show="showAll || item.title == selectedIndex">
        <div class="collection-title">{{ item.title }}</div>
        <ul>
          <li v-for="(obj) in item.list" :key="obj.title">
            <a class="tool-item-link" :href="obj.link">{{ obj.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {COLLECTION_DATA} from "@/data/collection";

export default {
  name: 'Collection',
  props: {},
  data() {
    return {
      showAll: true,
      selectedIndex: null,
      datas: COLLECTION_DATA,
    }
  },
  methods: {}
}
</script>

<style scoped>
@import "../common.css";

* {
  font-size: 14px;
  line-height: 1.5715;
  background-color: #fff;
  font-feature-settings: 'tnum';
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-variant: tabular-nums;
}

.collection-list-container {
  margin: 0 15px;
  /*overflow: scroll;*/
}

.-title {
  font-size: 16px;
  margin-left: 10px;
}

.collection-title {
  font-size: 15px;
}

.tool-item-link {
  padding-left: 4px;
  color: rgba(24, 144, 255, 0.95);
  text-decoration: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  -webkit-transition: color .3s;
  transition: color .3s;
  -webkit-text-decoration-skip: objects;
}

.tool-item-link:hover {
  color: #da280a;
}
</style>
