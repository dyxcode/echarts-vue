<template>
  <div class="user-board">
    <div class="row">
      <div class="item">
        <chart class="in-item" :option="top1_option" v-if="isshowtop"></chart>
        <img src="../../assets/img/timg.jpg" alt />
      </div>
      <div class="item">
        <chart class="in-item" :option="top2_option" v-if="isshowtop"></chart>
        <img src="../../assets/img/timg.jpg" alt />
      </div>
      <div class="item">
        <chart class="in-item" :option="top3_option" v-if="isshowtop"></chart>
        <img src="../../assets/img/timg.jpg" alt />
      </div>
    </div>
    <div class="row">
      <p class="choice">
        <span>选择关联数据（多组）：</span>
        <span @click="bindDataset('barchart')">关联柱状图</span>
        <span @click="bindDataset('linechart')">关联折线图</span>
        <span @click="bindDataset('stepchart')">关联阶段图</span>
      </p>
      <p class="choice">
        <span>选择关联数据（单组）：</span>
        <span @click="bindDataset('horichart')">关联水平柱图</span>
        <span @click="bindDataset('piechart')">关联饼形图</span>
        <span @click="bindDataset('rosechart')">关联玫瑰图</span>
      </p>
    </div>
    <div class="row">
      <div class="item">
        <chart class="in-item" :option="bottom1_option" v-if="isshowbottom"></chart>
        <img src="../../assets/img/timg.jpg" alt />
      </div>
      <div class="item">
        <chart class="in-item" :option="bottom2_option" v-if="isshowbottom"></chart>
        <img src="../../assets/img/timg.jpg" alt />
      </div>
      <div class="item">
        <chart class="in-item" :option="bottom3_option" v-if="isshowbottom"></chart>
        <img src="../../assets/img/timg.jpg" alt />
      </div>
    </div>
    <!-- <div class="column">
      <div class="item">
        <chart class="in-item" :option="left1_option"></chart>
        <img src="../../assets/img/timg.jpg" alt />
      </div>
      <div class="item">
        <chart class="in-item" :option="left2_option"></chart>
        <img src="../../assets/img/timg.jpg" alt />
      </div>
      <div class="item">
        <chart class="in-item" :option="left3_option"></chart>
        <img src="../../assets/img/timg.jpg" alt />
      </div>
    </div>
    <div class="column">
      <div class="top">
      </div>
      <div class="bottom">
      </div>
    </div>
    <div class="column">
      <div class="item">
        <chart class="in-item" :option="right1_option"></chart>
        <img src="../../assets/img/timg.jpg" alt />
      </div>
      <div class="item">
        <chart class="in-item" :option="right2_option"></chart>
        <img src="../../assets/img/timg.jpg" alt />
      </div>
      <div class="item">
        <chart class="in-item" :option="right3_option"></chart>
        <img src="../../assets/img/timg.jpg" alt />
      </div>
    </div>-->
  </div>
</template>
 
<script>
import Chart from "@/components/content/chart/Chart.vue";

export default {
  name: "UserBoard",
  components: {
    Chart
  },
  data() {
    return {
      top1_option: this.$store.getters.t1,
      top2_option: this.$store.getters.t2,
      top3_option: this.$store.getters.t3,
      bottom1_option: this.$store.getters.b1,
      bottom2_option: this.$store.getters.b2,
      bottom3_option: this.$store.getters.b3,
      isshowtop: true,
      isshowbottom: true
    };
  },
  methods: {
    bindDataset(chart) {
      let source = {}
      let flag = false
      switch(chart) {
        case 'barchart' : 
          source = this.top1_option.dataset.source; flag = true; 
          break;
        case 'linechart' : 
          source = this.top2_option.dataset.source; flag = true; 
          break;
        case 'stepchart' : 
          source = this.top3_option.dataset.source; flag = true; 
          break;
        case 'horichart' : 
          source = this.bottom1_option.dataset.source; 
          break;
        case 'piechart' : 
          source = this.bottom2_option.dataset.source; 
          break;
        case 'rosechart' : 
          source = this.bottom2_option.dataset.source; 
          break;
      }
      if (flag)
        this.multi(source)
      else
        this.single(source)
    },
    single(source) {
      if (source.length != 2) {
        let data = []
        for (let i = 0; i < source[1].length; ++i) {
          data.push(parseInt(source[1][i] * parseInt(source[2][i]) / 100))
        }
        this.bottom2_option.dataset.source[0] = source[0]
        this.bottom2_option.dataset.source[1] = data
        this.bottom3_option.dataset.source[0] = source[0]
        this.bottom3_option.dataset.source[1] = data
      }
      else {
        let sum = 0;
        let data = [];
        source[1].forEach(element => {
          sum += element
        });
        source[1].forEach(element => {
          data.push(parseInt(element/sum*100))
        });

        this.bottom2_option.dataset.source = source
        this.bottom3_option.dataset.source = source

        this.bottom1_option.dataset.source[0] = source[0]
        this.bottom1_option.dataset.source[1] = data
        for (let i = 0; i < source[1].length; ++i) {
          this.bottom1_option.dataset.source[2][i] = source[1][i] + ':' + i
          this.bottom1_option.dataset.source[3][i] = 100
        }
      }

      this.refresh('bottom')
    },
    updateMultiSeries(num, option) {
      if (num <= option.series.length)
        option.series.length = num
      else {
        for (let i = option.series.length; i < num; ++i) {
          option.series[i] = JSON.parse(JSON.stringify(option.series[0]))
          option.series[i].name = "series" + (i + 1)
        }
      }
    },
    multi(source) {
      let series_num = source.length - 1
      this.top1_option.dataset.source = source
      this.top2_option.dataset.source = source
      this.top3_option.dataset.source = source
      this.updateMultiSeries(series_num, this.top1_option)
      this.updateMultiSeries(series_num, this.top2_option)
      this.updateMultiSeries(series_num, this.top3_option)

      this.refresh('top')
    },
    refresh(part) {
      this['isshow'+part] = false
      let _this = this
      setTimeout(() => {
        _this['isshow'+part] = true
      }, 0);
    }
  }
};
</script>
 
<style scoped>
.user-board {
  display: flex;
  flex-flow: column;
  height: 90%;
  width: 100%;
  padding: 0.125rem 0;
}
.row {
  display: flex;
  justify-content: space-between;
  flex: 3 1 auto;
  width: 100%;
  padding-right: 0.125rem;
}
.row:nth-child(2) {
  flex: 1 1 auto;
  flex-flow: column;
  justify-content: space-around;
}

.choice {
  width: 100%;
  padding-left: 30%;
}
.choice span:not(:first-child) {
  margin-left: .125rem;
  cursor: pointer;
}

.item {
  flex: 1 1 30%;
  position: relative;
  margin-left: 0.125rem;
  height: 100%;
  z-index: 5;
}
.item img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  z-index: -2;
}
.item .in-item {
  position: absolute;
  top: 0;
  left: 0;
}

.item:hover::before,
.item:hover::after {
  display: block;
}
.item::before {
  display: none;
  content: "";
  position: absolute;
  border: solid springgreen;
  z-index: -1;
  animation: bordermove1 5s linear infinite;
}
.item::after {
  display: none;
  content: "";
  position: absolute;
  border: solid springgreen;
  z-index: -1;
  animation: bordermove2 5s linear infinite;
}
@keyframes bordermove1 {
  0% {
    border-width: 0.02rem 0;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
  }
  25% {
    border-width: 0.02rem 0;
    width: 50%;
    height: 100%;
    top: 0;
    left: 50%;
  }
  50% {
    border-width: 0.02rem 0;
    width: 0;
    height: 100%;
    top: 0;
    left: 100%;
  }
  50.01% {
    top: 0;
    left: 0;
    border-width: 0 0.02rem;
    width: 100%;
    height: 0;
  }
  75% {
    top: 50%;
    left: 0;
    border-width: 0 0.02rem;
    width: 100%;
    height: 50%;
  }
  100% {
    top: 100%;
    left: 0;
    border-width: 0 0.02rem;
    width: 100%;
    height: 0;
  }
}
@keyframes bordermove2 {
  0% {
    border-width: 0.02rem 0;
    right: 0;
    width: 0;
    height: 100%;
  }
  25% {
    border-width: 0.02rem 0;
    width: 50%;
    height: 100%;
    right: 50%;
  }
  50% {
    border-width: 0.02rem 0;
    width: 0;
    height: 100%;
    right: 0;
  }
  50.01% {
    bottom: 0;
    left: 0;
    border-width: 0 0.02rem;
    width: 100%;
    height: 0;
  }
  75% {
    bottom: 50%;
    left: 0;
    border-width: 0 0.02rem;
    width: 100%;
    height: 50%;
  }
  100% {
    bottom: 100%;
    left: 0;
    border-width: 0 0.02rem;
    width: 100%;
    height: 0;
  }
}

.top {
  display: flex;
  height: 10%;
  margin-top: -0.0625rem;
}

.bottom {
  height: 90%;
  width: 100%;
}
</style>