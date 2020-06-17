<template>
  <basic-axis class="horizontal" :options="options"></basic-axis>
</template>
 
<script>
import BasicAxis from "@/components/content/basicaxis/BasicAxis.vue";

export default {
  name: "Barchart",
  components: {
    BasicAxis
  },
  data() {
    return {
      options: this.$store.state.top1_option
    };
  },
  methods: {
    updateOption() {
      let option = this.$children[0].option
      this.$store.commit({
        type: 'updated_option',
        place: 'top1_option',
        option: option
      })
    }
  },
  beforeRouteLeave (to, from, next) {
    this.updateOption()
    next()
  }
};
</script>
 
<style scoped>
</style>