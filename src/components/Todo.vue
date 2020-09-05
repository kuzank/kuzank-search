<template>
  <div class="todo-list-container">
    <div class="" v-for="(item) in datas" :key="item.title">
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
export default {
  name: 'Todo',
  props: {
    datas: Array
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
