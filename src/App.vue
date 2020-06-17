<template>
  <div id="app">
    <header><h1>{{ title }}</h1></header>
    <keep-alive :include="$store.getters.keep_alive">
      <router-view />
    </keep-alive>
    <!-- <footer></footer> -->
    <drawer :line="2">
      <drawer-item 
        @click="viewSwitch(index)" 
        v-for="(item, index) in options" 
        :key="item" 
        :word="item"
        :native="index === isnative"
      ></drawer-item>
    </drawer>
  </div>
</template>

<script>
import { Drawer, DrawerItem } from "./components/common/drawer/index";

export default {
  name: "App",
  components: {
    Drawer,
    DrawerItem
  },
  data() {
    return {
      options: ["疫情展板", "用户展板", "柱状图", "水平柱图", "折线图", "阶段图", "饼形图", "玫瑰图"],
      pages: ["/coronavirus", "/userboard", "/barchart", "/horizontalbarchart", "/linechart", "/steplinechart","/piechart", "/rosechart"],
      title: '疫情展板',
      isnative: 0
    };
  },
  methods: {
    viewSwitch(index) {
      if (this.isnative === index)
        return ;
      this.title = this.options[index]
      this.isnative = index
      this.$router.push(this.pages[index])
    }
  }
};
</script>

<style>
@import "./assets/css/base.css";
#app {
  position: relative;
  height: 100vh;
  color: #969619;
  background: radial-gradient(
    220% 105% at top center,
    #255864 10%,
    #3c1174 20%,
    #220968 65%,
    #0f4775
  );
  background-attachment: fixed;
}
/* #app::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.22;
  background: url("./assets/img/bg.jpg") no-repeat;
  background-size: 100% 100%;
} */
header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
}
header::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  background: url('./assets/img/hdbg.jpg') no-repeat;
  background-size: 100% 100%;
  opacity: 0.1;
}
header h1 {
  letter-spacing: .25rem;
  transform: translate(.125rem, 0);
}
/* footer {
  position: relative;
  height: 10%;
}
footer::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  background: url('./assets/img/ftbg.jpg') no-repeat;
  background-size: 100% 100%;
  opacity: 0.3;
} */
</style>
