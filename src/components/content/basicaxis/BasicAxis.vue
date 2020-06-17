<template>
  <div class="basic-axis">
    <div class="operates">
      <p @click="addData">增加一组数据</p>
      <div v-show="show_add_data">
        <p>
          已增加数据：
          <br />
          {{ all_data }}
        </p>
        <div class="data-div">
          <label>数据:</label>
          <input
            type="text"
            placeholder="请输入数字"
            v-model="current_data"
            @keyup.enter="addAPieceOfData"
          />
          <button @click="addAPieceOfData">增加</button>
        </div>
        <button class="submit" @click="addSubmit">提交</button>
      </div>

      <p @click="removeData">删除一组数据</p>
      <div v-show="show_remove_data">
        <p>
          现存的数据组：
          <br />
          {{ showAllserious }}
        </p>
        <div class="data-div">
          <label>序列号:</label>
          <input
            type="text"
            placeholder="请输入数字"
            v-model="current_data"
            @keyup.enter="removeAPieceOfData"
          />
          <button @click="removeAPieceOfData">删除</button>
        </div>
      </div>

      <p @click="modifyLabel">修改数据标签</p>
      <div v-show="show_modify_label">
        <p>
          已添加标签：
          <br />
          {{ all_data }}
        </p>
        <div class="data-div">
          <label>标签:</label>
          <input
            type="text"
            placeholder="请输入标签"
            v-model="current_data"
            @keyup.enter="addAPieceOfLabel"
          />
          <button @click="addAPieceOfLabel">添加</button>
        </div>
        <button class="submit" @click="modifySubmit">提交</button>
      </div>
    </div>
    <div class="view">
      <border>
        <div class="content" ref="content"></div>
      </border>
    </div>
  </div>
</template>
 
<script>
import Border from "@/components/content/border/Border.vue";

export default {
  name: 'BasicAxis',
  components: {
    Border
  },
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: {},
      option: {},
      current_data: "",
      all_data: [],
      show_add_data: false,
      show_remove_data: false,
      show_modify_label: false
    }
  },
  computed: {
    showAllserious() {
      let all_serious = [];
      if (this.option.series) {
        this.option.series.forEach(element => {
          all_serious.push(element.name);
        });
      }
      return all_serious;
    }
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
    increaseIndex(s) {
      let new_order = parseInt(s.match(/\d/)[0]) + 1;
      return s.replace(/\d/, new_order);
    },
    decreaseIndex(s) {
      let new_order = parseInt(s.match(/\d/)[0]) - 1;
      return s.replace(/\d/, new_order);
    },
    changeBarWidth() {
      let width = 100 / (this.option.series.length + 1) * 0.8 + "%"
      this.option.series.forEach(item => {
        item.barWidth = width
      })
    },
    addData() {
      this.all_data.length = 0;
      this.show_modify_label = false;
      this.show_remove_data = false;
      this.show_add_data = !this.show_add_data;
    },
    addAPieceOfData() {
      if (this.current_data) this.all_data.push(Number(this.current_data));
      this.current_data = "";
    },
    addSubmit() {
      if (this.all_data.length === 0) return;
      let dataset = this.option.dataset;

      // 为未填数据补0
      while (this.all_data.length < dataset.source[0].length)
        this.all_data.push(0);

      // deep clone
      let new_data = JSON.parse(JSON.stringify(this.all_data));
      this.option.dataset.source.push(new_data);

      // add series
      let old_series = this.option.series[this.option.series.length - 1];
      // let new_order = parseInt(old_series.name.match(/\d/)[0]) + 1

      let series = {},
        key;
      for (key in old_series) {
        if (key == "name") {
          // series[key] = old_series.name.replace(/\d/, new_order)
          series[key] = this.increaseIndex(old_series[key]);
        } else {
          series[key] = old_series[key];
        }
      }
      this.option.series.push(series);
      //series-bar. barWidth 在同一坐标系上，此属性会被多个 'bar' 系列共享。此属性应设置于此坐标系中最后一个 'bar' 系列上才会生效，并且是对此坐标系中所有 'bar' 系列生效。
      // 并没有生效！！！还是得一个个设置
      // 100 / (this.option.series.length + 1) * 0.8 + "%"
      this.changeBarWidth()
  
      this.chart.setOption(this.option);
      this.all_data.length = 0;
    },
    removeData() {
      this.show_modify_label = false;
      this.show_add_data = false;
      this.show_remove_data = !this.show_remove_data;
    },
    removeAPieceOfData() {
      if (this.current_data && this.option.series.length > 1) {
        let index = this.option.series.findIndex(item => {
          if (item.name.match(/\d/)[0] == this.current_data) return true;
        });
        if (index === -1) {
          this.current_data = "";
          return;
        }
        this.option.dataset.source.splice(index + 1, 1);
        this.option.series.splice(index, 1);

        while (index != this.option.series.length) {
          this.option.series[index].name = this.decreaseIndex(
            this.option.series[index].name
          );
          ++index;
        }
        this.changeBarWidth()
        // 删除可能有bug，默认不会减少数据维度，只能增加，所以先清空chart实例
        this.chart.clear();
        this.chart.setOption(this.option);
        this.current_data = "";
      } else {
        this.current_data = "";
      }
    },
    modifyLabel() {
      this.all_data.length = 0;
      this.show_add_data = false
      this.show_remove_data = false
      this.show_modify_label = !this.show_modify_label
    },
    addAPieceOfLabel() {
      if (this.current_data) this.all_data.push(this.current_data);
      this.current_data = "";
    },
    modifySubmit() {
      if (this.all_data.length === 0) return;
      
      let source = this.option.dataset.source
      source.forEach(item => {
        item.length = this.all_data.length
      })
      this.all_data.forEach((item, index) => {
        source[0][index] = this.all_data[index]
      })
      this.chart.setOption(this.option);
      this.all_data = [];
    }
  },
  mounted() {
    this.init();
  }
}
</script>
 
<style scoped>
.vertical {
  height: 90%;
  width: 100%;
}
.horizontal {
  display: flex;
  width: 100%;
  height: 90%;
}
.vertical .operates {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20%;
}
.horizontal .operates {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 30%;
}

.operates > p {
  font-size: 0.25rem;
  text-align: center;
  background-image: linear-gradient(
    to right,
    rgba(103, 191, 231, 0.2),
    rgba(197, 11, 11, 0.2)
  );
}
.vertical .operates > p {
  margin: 0 0.125rem;
}
.horizontal .operates > p {
  margin: 0.125rem 0;
}

.operates > p:hover {
  opacity: 0.8;
  cursor: pointer;
}
.vertical .operates > p + div {
  width: 100%;
  text-align: center;
}
.horizontal .operates > p + div {
  width: 80%;
  margin-left: 10%;
  text-align: center;
}
.operates > p + div * {
  margin: .025rem 0;
}
.vertical .operates > p + div p {
  width: auto
}
button {
  color: rgb(21, 2, 36);
  border: .0125rem #66a9c9 solid;
	text-align: center;
	border-radius: .0625rem;
	box-shadow: 0 0 .0625rem #cccccc inset;
	background-color: #884343;
}
.vertical .submit {
  width: .75rem;
}
.horizontal .submit {
  width: 20%;
}

.data-div {
  display: flex;
  align-items: center;
  width: 100%;
}
.vertical .data-div{
  justify-content: center;
}

.data-div * {
  font-size: 0.1875rem;
}
.vertical .data-div * {
  flex: 0 1 auto;
}
.horizontal .data-div * {
  flex: 1 1 auto;
}
.data-div label {
  text-align: center;
}
.vertical .data-div button {
  width: .75rem;
}

.vertical .view {
  position: relative;
  height: 80%;
}
.horizontal .view {
  position: relative;
  text-align: center;
  padding-top: 0.125rem;
  width: 70%;
}
.content {
  height: 100%;
  width: 100%;
}
</style>