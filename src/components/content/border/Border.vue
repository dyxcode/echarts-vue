<template>
  <div class="border">
    <slot></slot>
    <img src="../../../assets/img/borderbg.jpg" alt=""/>
    <div class="footer"></div>
  </div>
</template>
 
<script>
export default {
  name: "Border"
};
</script>
 
<style scoped>
.border { 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 95%;
  width: 95%;
}
.border::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: .125rem;
  height: .125rem;
  border-left: .025rem solid #02a6b5;
  border-top: .025rem solid #02a6b5;
}
.border::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: .125rem;
  height: .125rem;
  border-right: .025rem solid #02a6b5;
  border-top: .025rem solid #02a6b5;
}
.border .footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.border .footer::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: .125rem;
  height: .125rem;
  border-left: .025rem solid #02a6b5;
  border-bottom: .025rem solid #02a6b5;
}
.border .footer::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: .125rem;
  height: .125rem;
  border-right: .025rem solid #02a6b5;
  border-bottom: .025rem solid #02a6b5;
}
.border img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.1;
}
</style>