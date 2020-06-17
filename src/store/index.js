import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  top1_option: {
    color: ["#006cff", "#60cda0", "#ed8884", "#ff9f7f", "#0096ff", "#9fe6b8"],
    dataset: {
      source: [
        ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        [10, 52, 200, 334, 390, 330, 220]
      ],
      sourceHeader: false
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      textStyle: {
        color: "#4c9bfd"
      },
      right: "10%"
    },
    grid: {
      left: "5%",
      right: "5%",
      top: "12%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [{
      type: "category",
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        color: "rgba(255,255,255,.6)",
        fontSize: "12"
      },
      axisLine: {
        show: false
      }
    }],
    yAxis: [{
      type: "value",
      axisLabel: {
        color: "rgba(255,255,255,.6)",
        fontSize: "12"
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)",
          width: 2
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    }],
    series: [{
      name: "series1",
      type: "bar",
      seriesLayoutBy: "row",
      barWidth: "35%",
      itemStyle: {
        barBorderRadius: 5
      }
    }]
  },
  top2_option: {
    color: ["#006cff","#60cda0","#ed8884","#ff9f7f","#0096ff","#9fe6b8"],
    dataset: {
      source: [
        ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        [220, 182, 191, 234, 290, 330, 310],
        [150, 232, 201, 154, 190, 330, 410]
      ]
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      textStyle: {
        color: "#4c9bfd"
      },
      right: "10%"
    },
    grid: {
      left: "3%",
      right: "4%",
      top: "12%",
      bottom: "3%",
      show: true,
      borderColor: "#012f4a",
      containLabel: true
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfd"
      }
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfd"
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [
      {
        name: "series1",
        type: "line",
        seriesLayoutBy: "row",
        smooth: true,
      },
      {
        name: "series2",
        type: "line",
        seriesLayoutBy: "row",
        smooth: true,
      }
    ]
  },
  top3_option: {
    color: ["#006cff","#60cda0","#ed8884","#ff9f7f","#0096ff","#9fe6b8"],
    dataset: {
      source: [
        ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        [120, 132, 101, 134, 90, 230, 210],
        [220, 282, 201, 234, 290, 430, 410],
        [450, 432, 401, 454, 590, 530, 510]
      ]
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      textStyle: {
        color: "#4c9bfd"
      }
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "12%",
      containLabel: true,
      borderColor: "#012f4a"
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfd"
      }
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfd"
      },
      splitLine: {
        lineStyle: {
          color: "#812eb8"
        }
      }
    },
    series: [
      {
        name: "series1",
        type: "line",
        step: "start",
        seriesLayoutBy: "row"
      },
      {
        name: "series2",
        type: "line",
        step: "middle",
        seriesLayoutBy: "row"
      },
      {
        name: "series3",
        type: "line",
        step: "end",
        seriesLayoutBy: "row"
      }
    ]
  },
  bottom1_option: {
    dataset: {
      source: [
        ["巴西", "印尼", "美国", "印度", "中国"],
        [38, 23, 29, 30, 13],
        ["702:0", "350:1", "610:2", "793:3", "664:4"],
        [100, 100, 100, 100, 100]
      ]
    },
    grid: {
      top: "2%",
      bottom: 0,
      containLabel: true
    },
    xAxis: {
      show: false,
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "rgba(255,255,255,.6)"
        }
      },
      {
        type: "category",
        inverse: true,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: "rgba(255,255,255,.6)"
          },
          formatter: function(value) {
            return value.replace(/:\d*/, "")
          }
        }
      }
    ],
    series: [
      {
        type: "bar",
        yAxisIndex: 0,
        itemStyle: {
          barBorderRadius: 15,
          color: function(params) {
            const barColor = [
              "#1089e7",
              "#f57474",
              "#56d0e3",
              "#f8b448",
              "#8b78f6",
              "#006cff",
              "#60cda0",
              "#ed8884",
              "#ff9f7f",
              "#0096ff",
              "#9fe6b8"
            ];
            return barColor[params.dataIndex];
          }
        },
        barCategoryGap: 50,
        barWidth: "35%",
        label: {
          normal: {
            show: true,
            position: "inside",
            formatter: "{@[1]}%"
          }
        },
        seriesLayoutBy: "row",
        encode: {
          x: 1,
          y: 0
        }
      },
      {
        name: "percent",
        type: "bar",
        yAxisIndex: 1,
        barCategoryGap: 50,
        barWidth: "35%",
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: "3",
          barBorderRadius: 15
        },
        tooltip: {
          show: false
        },
        seriesLayoutBy: "row",
        encode: {
          x: 3,
          y: 2
        }
      }
    ]
  },
  bottom2_option: {
    color: ["#1089e7", "#f57474", "#56d0e3", "#f8b448", "#8b78f6"],
    dataset: {
      source: [
        ["中国","印度","美国","印尼","巴西"],
        [335,310,1548,135,234]
      ]
    },
    tooltip: {
      trigger: "item",
      formatter: "{c}({d}%)"
    },
    legend: {
      orient: 'vertical',
      bottom: "20%",
      left: "5%",
      itemWidth: 15,
      itemHeight: 15,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "15"
      }
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        center: ["50%", "50%"],
        radius: ["50%", "80%"],
        avoidLabelOverlap: false,
        label: {
          show: true,
          fontSize: "15",
          // position: "center"
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "25",
            fontWeight: "bold",
          }
        },
        labelLine: {
          show: false
        },
        seriesLayoutBy: "row"
      }
    ]
  },
  bottom3_option: {
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8"
    ],
    dataset: {
      source: [
        ["云南", "北京", "山东", "河北", "江苏", "湖北"],
        [20, 26, 24, 25, 20, 42]
      ]
    },
    tooltip: {
      trigger: "item",
      formatter: "{c}({d}%)"
    },
    legend: {
      bottom: "0%",
      itemWidth: 15,
      itemHeight: 15,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "15"
      }
    },
    series: [
      {
        name: "series1",
        type: "pie",
        seriesLayoutBy: "row",
        radius: ["20%", "80%"],
        center: ["50%", "50%"],
        roseType: "radius",
        label: {
          fontSize: 12  
        },
        labelLine: {
          length: 2,
          length2: 2
        }
      }
    ]
  },
  keep_alive: ['Barchart', 'HorizontalBarchart', 'Linechart', 'Piechart', 'Rosechart', 'StepLinechart', 'Coronavirus']
}

const store = new Vuex.Store({
  state,
  mutations: {
    updated_option(state, load) {
      state[load.name] = load.option
    },
  },
  getters: {
    keep_alive() {
      return state.keep_alive
    },
    t1() {
      return JSON.parse(JSON.stringify(state.top1_option))
    },
    t2() {
      return JSON.parse(JSON.stringify(state.top2_option))
    },
    t3() {
      return JSON.parse(JSON.stringify(state.top3_option))
    },
    b1() {
      let obj = JSON.parse(JSON.stringify(state.bottom1_option))
      obj.yAxis = state.bottom1_option.yAxis
      obj.series = state.bottom1_option.series
      return obj
    },
    b2() {
      return JSON.parse(JSON.stringify(state.bottom2_option))
    },
    b3() {
      return JSON.parse(JSON.stringify(state.bottom3_option))
    }
  }
})

export default store