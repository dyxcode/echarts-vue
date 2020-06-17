<template>
  <div class="drawer-item">
    <slot>
      <p @click="click" v-bind="$attrs">{{ word }}</p>
    </slot>
  </div>
</template>
 
<script>
export default {
  name: "DrawerItem",
  inheritAttrs: false,
  props: {
    word: {
      type: String,
      required: true
    }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
};
</script>
 
<style scoped>
.drawer-item {
  width: 100%;
  height: .375rem;
  margin: .125rem 0;
}
p {
  color: rgb(75, 6, 18);
  width: 100%;
  background-color: #93d5dc;
  box-shadow: 0 0 .0625rem #999999 inset;
  opacity: 0.8;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
}
[native] {
  border-right: .0625rem solid #c4334c;
}
</style>