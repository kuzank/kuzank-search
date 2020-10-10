<template>
  <div class="d-flex justify-content-center">
    <div class="d-flex flex-wrap" style="width: 1300px">
      <div v-for="(item) in datas " :key="item.title" style="width: 250px;margin-bottom: 20px">
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
import {TOOL_DATA} from "@/data/tool";

export default {
  name: 'Tool',
  props: {},
  data() {
    return {
      datas: TOOL_DATA
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

.tool-list-container {
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
