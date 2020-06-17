<template>
  <div ref="content">
  </div>
</template>
 
<script>
export default {
  name: 'Chart',
  props: {
    option: {
      type: Object,
      required: true
    }
  },
  mounted() {
    let chart = this.$echarts.init(this.$refs.content);

    chart.setOption(this.option);
    // 图表跟随屏幕自适应
    window.addEventListener("resize", function() {
      chart.resize();
    });
  }
}
</script>
 
<style scoped>
div {
  height: 100%;
  width: 100%;
}
</style>