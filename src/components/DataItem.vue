<template>
  <div class="data-list-container height-100">
    <div class="tool-box-div" v-for="(item) in datas" :key="item.title">
      <div class="tool-title" :class="item.link ? 'point color-danger' : ''" v-if="item.title"
           @click="open(item.link)">
        {{ item.title }}
      </div>
      <div class="tool-item" v-for="(obj) in item.list" :key="obj.title">
        <span>*</span>
        <a class="tool-item-link" :href="obj.link">{{ obj.title }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataItem',
  props: {
    datas: Array
  },
  methods: {
    open(url) {
      if (url)
        window.location.href = url;
    }
  }
}
</script>

<style scoped>
@import "../common.css";

.data-list-container {
  width: 200px;
}

.tool-box-div {
  padding: 5px 8px;
  margin: 6px;
  border: 1px solid rgba(181, 178, 182, 0.36);
  border-radius: 4px;
}

.tool-item {
  margin-bottom: 4px;
}

.tool-title {
  font-size: 1.2em;
  padding: 2px 0 6px 0;
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
