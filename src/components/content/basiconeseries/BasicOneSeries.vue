<template>
  <div class="basic-one-series">
    <div class="left">
      <div title="双击修改标签">
        <input
          type="text"
          v-for="(item,index) in names"
          :key="index"
          :class="'label' + index"
          v-model="names[index]"
          readonly
          required
          @dblclick="modify('.label'+index)"
          @blur="loseCursor('.label',index)"
        />
      </div>
      <div title="双击修改数据">
        <input
          type="text"
          v-for="(item,index) in values"
          :class="'value' + index"
          :key="index"
          v-model="values[index]"
          readonly
          required
          @dblclick="modify('.value'+index)"
          @blur="loseCursor('.value',index)"
        />
      </div>
      <div title="双击修改总量" v-if="is_show">
        <input
          type="text"
          v-for="(item,index) in total"
          :class="'total' + index"
          :key="index"
          v-model="total[index]"
          readonly
          required
          @dblclick="modify('.total'+index)"
          @blur="loseCursor('.total',index)"
        />
      </div>
      <div class="delete">
        <button v-for="(item,index) in values" :key="index" @click="deleteItem(index)"></button>
      </div>
      <p @dblclick="addItem">双击这里添加数据</p>
    </div>
    <div class="right">
      <border>
        <div class="content" ref="content"></div>
      </border>
    </div>
  </div>
</template>
 
<script>
import Border from "@/components/content/border/Border.vue";

export default {
  name: "BasicOneSeries",
  components: {
    Border
  },
  props: {
    options: {
      type: Object,
      required: true
    },
    is_show: false
  },
  data() {
    return {
      chart: {},
      option: {},
    };
  },
  methods: {
    init() {
      this.chart = this.$echarts.init(this.$refs.content);

      this.option = this.options
      this.chart.setOption(this.option);
      // 图表跟随屏幕自适应
      let chart = this.chart
      window.addEventListener("resize", function() {
        chart.resize();
      });
    },
    modify(classname) {
      let node = document.querySelector(classname)
      node.removeAttribute('readonly')
      node.style.cursor = 'text'
    },
    loseCursor(prename, index) {
      let node = document.querySelector(prename+index)
      if (prename === '.label' && !this.names[index]) {
        setTimeout(() => { node.focus() }, 0);
        return 
      }
      node.setAttribute('readonly', 'readonly')
      node.style.cursor = 'default'
      if (prename === '.value') {
        this.values[index] = Number(this.values[index])
        node.value = this.values[index]
      }    
      if (prename === '.total') {
        this.option.dataset.source[2][index] = this.total[index]+':'+index
        node.value = this.total[index]
      }    
      this.chart.setOption(this.option)
    },
    addItem() {
      this.option.dataset.source[0].push('')
      this.option.dataset.source[1].push(0)
      if (this.option.dataset.source[2]) {
        let length = this.option.dataset.source[2].length
        this.option.dataset.source[2].push(0+':'+length)
        this.option.dataset.source[3].push(100)
      }
      // 需要延时一下才能获取新渲染的结点
      setTimeout(() => {
        let node = document.querySelector('.label'+(this.names.length-1))
        node.removeAttribute('readonly')
        node.style.cursor = 'text'
        node.focus()  
      }, 0);
    },
    deleteItem(index) {
      this.option.dataset.source[0].splice(index, 1)
      this.option.dataset.source[1].splice(index, 1)
      if (this.option.dataset.source[2]) {
        this.option.dataset.source[2].splice(index, 1)
        this.option.dataset.source[3].splice(index, 1)
      }
      this.chart.setOption(this.option)
    }
  },
  computed: {
    names() {
      if (this.option.dataset)
      return this.option.dataset.source[0]
    },
    values() {
      if (this.option.dataset)
      return this.option.dataset.source[1]
    },
    total() {
      if (this.option.dataset && this.option.dataset.source[2]) {
        let totals = []
        this.option.dataset.source[2].forEach(element => {
          totals.push(element.replace(/:\d*/, ""))
        });
        return totals
      }
    }
  },
  mounted() {
    this.init();
  }
};
</script>
 
<style scoped>
.basic-one-series {
  display: flex;
  width: 100%;
  height: 90%;
}
.left {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;  
  align-items: center;
  align-content: center;
  width: 30%;
}
.two .left > div[title] {
  flex: 1 1 47%;
}
.three .left > div[title] {
  flex: 1 1 31%;
}

.two .left .delete {
  display: flex;
  flex-flow: column;
  flex: 1 1 6%
}
.three .left .delete {
  display: flex;
  flex-flow: column;
  flex: 1 1 7%
}
.left .delete button {
  width: 100%;
  height: .3125rem;
  margin: 0.25rem 0;
  background: url("../../../assets/img/delete.svg");
  background-size: 100% 100%;
  box-shadow: 0 0 .125rem rgb(242, 209, 210) inset;
  opacity: 0.5;
}
.left input {
  width: 100%;
  height: .3125rem;
  cursor: default;
  appearance: none;
  border: 0;
  margin: 0.25rem 0;
  font-size: 0.3rem;
  text-align: center;
  background-image: linear-gradient(
    to right,
    rgba(103, 191, 231, 0.2),
    rgba(197, 11, 11, 0.2)
  );
}

.right {
  position: relative;
  text-align: center;
  padding-top: .125rem;
  width: 70%;
}
.content {
  width: 100%;
  height: 100%;
}
</style>