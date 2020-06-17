<template>
  <basic-axis class="vertical" :options="options"></basic-axis>
</template>
 
<script>
import BasicAxis from "@/components/content/basicaxis/BasicAxis.vue";

export default {
  name: "StepLinechart",
  components: {
    BasicAxis
  },
  data() {
    return {
      options: this.$store.state.top3_option
    };
  },
  methods: {
    updateOption() {
      let option = this.$children[0].option
      this.$store.commit({
        type: 'updated_option',
        place: 'top3_option',
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