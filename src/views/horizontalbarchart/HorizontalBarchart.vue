<template>
  <basic-one-series :is_show="true" class="three" :options="options"></basic-one-series>
</template>
 
<script>
import BasicOneSeries from "@/components/content/basiconeseries/BasicOneSeries.vue";

export default {
  name: "HorizontalBarchart",
  components: {
    BasicOneSeries
  },
  data() {
    return {
      options: this.$store.state.bottom1_option
    };
  },
  methods: {
    updateOption() {
      let option = this.$children[0].option
      this.$store.commit({
        type: 'updated_option',
        place: 'bottom1_option',
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