<template>
  <div class="collection-list-container">
    <div class="" v-for="(item) in datas " :key="item.title">
      <div class="collection-title">{{ item.title }}</div>
      <ul>
        <li v-for="(obj) in item.list" :key="obj.title">
          <a class="tool-item-link" target="_blank" :href="obj.link" @click="open(obj.link)">{{ obj.title }}</a>
        </li>
      </ul>
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
      datas: COLLECTION_DATA
    }
  },
  methods: {
    open(url) {
      window.location.href = url;
    }
  }
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
  overflow: scroll;
}

.collection-title {
  font-size: 16px;
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
