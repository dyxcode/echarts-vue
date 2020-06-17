<template>
  <basic-one-series class="two" :options="options"></basic-one-series>
</template>
 
<script>
import BasicOneSeries from "@/components/content/basiconeseries/BasicOneSeries.vue";

export default {
  name: "Rosechart",
  components: {
    BasicOneSeries
  },
  data() {
    return {
      options: this.$store.state.bottom3_option
    };
  },
  methods: {
    updateOption() {
      let option = this.$children[0].option
      this.$store.commit({
        type: 'updated_option',
        place: 'bottom3_option',
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