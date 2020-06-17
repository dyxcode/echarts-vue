<template>
  <div class="drawer">
    <slot></slot>
    <div class="touch"></div>
  </div>
</template>
 
<script>
export default {
  name: 'Drawer',
  props: {
    line: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    if (this.line != 0) {
      const node = document.querySelector(".drawer "+"*:nth-child("+this.line+")")
      node.style.paddingBottom = ".5rem"
      node.style.borderBottom = ".05rem solid rgb(253,136,136)"
    }
  }
}
</script>
 
<style scoped>
.drawer {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: .125rem;
  height: 100vh;
  background-image: linear-gradient(to bottom, #00ffff, #004d70);
  overflow: hidden;
  opacity: 0.2;
  transition: 0.5s;
}
.drawer .touch {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, #00ffff, #004d70);
}
.touch:hover {
  display: none;
}
.drawer:hover .touch {
  display: none;
}
.drawer:hover {
  width: 1.25rem;
  opacity: 0.8;
}
</style>