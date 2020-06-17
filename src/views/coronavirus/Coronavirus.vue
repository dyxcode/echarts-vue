<template>
  <div class="china-map">
    <div class="column">
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
        <div class="show-data">
          <p>84565</p>
          <p>累计确诊</p>
        </div>
        <div class="show-data">
          <p>118</p>
          <p>现存确诊</p>
        </div>
        <div class="show-data">
          <p>79802</p>
          <p>累计治愈</p>
        </div>
        <div class="show-data">
          <p>5</p>
          <p>现存疑似</p>
        </div>
        <div class="show-data">
          <p>4645</p>
          <p>累计死亡</p>
        </div>
        <div class="show-data">
          <p>3</p>
          <p>现存重症</p>
        </div>
      </div>
      <div class="bottom">
        <div class="wrapper">
          <div class="map-ball"></div>
          <div class="map-rotate1"></div>
          <div class="map-rotate2"></div>
        </div>
        <chart class="map" :option="map_option"></chart>
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
    </div>
  </div>
</template>
 
<script>
import "../../assets/js/china";
import Chart from "@/components/content/chart/Chart.vue";

export default {
  name: "Coronavirus",
  components: {
    Chart
  },
  data() {
    return {
      map_option: {
        tooltip: {
          triggerOn: "click",
          formatter: function(e, t, n) {
            return 0.5 == e.value
              ? e.name + "：有疑似病例"
              : e.seriesName + "<br />" + e.name + "：" + e.value;
          }
        },
        visualMap: {
          min: 0,
          max: 1000,
          left: "27%",
          bottom: 10,
          showLabel: !0,
          text: ["高", "低"],
          textStyle: {
            color: "rgba(255,255,255)",
            fontSize: "10"
          },
          pieces: [
            {
              gte: 10000,
              label: "≥ 10000 人",
              color: "rgba(127,17,0,0.8)"
            },
            {
              gte: 1000,
              lte: 9999,
              label: "1000 - 9999 人",
              color: "rgba(255,84,40,0.8)"
            },
            {
              gte: 100,
              lte: 999,
              label: "100 - 999 人",
              color: "rgba(255,105,70,0.8)"
            },
            {
              gte: 10,
              lte: 99,
              label: "10 - 99 人",
              color: "rgba(255,140,113,0.8)"
            },
            {
              gte: 1,
              lte: 9,
              label: "1 - 9 人",
              color: "rgba(255,209,209,0.8)"
            },
            {
              value: 0,
              color: "rgba(255,255,255,0.8)"
            }
          ],
          show: !0
        },
        geo: {
          map: "china",
          roam: !0,
          scaleLimit: {
            min: 1,
            max: 2
          },
          zoom: 1,
          top: "15%",
          label: {
            normal: {
              show: !0,
              fontSize: "14",
              color: "rgba(255,255,255,.6)"
            }
          },
          itemStyle: {
            normal: {
              borderColor: "rgba(255, 0, 0, 0.2)"
            },
            emphasis: {
              areaColor: "#f2d5ad",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              borderWidth: 0
            }
          }
        },
        series: [
          {
            name: "确诊病例",
            type: "map",
            geoIndex: 0,
            data: [
              {
                name: "南海诸岛",
                value: 0
              },
              {
                name: "北京",
                value: 593
              },
              {
                name: "天津",
                value: 192
              },
              {
                name: "上海",
                value: 672
              },
              {
                name: "重庆",
                value: 579
              },
              {
                name: "河北",
                value: 328
              },
              {
                name: "河南",
                value: 1276
              },
              {
                name: "云南",
                value: 185
              },
              {
                name: "辽宁",
                value: 149
              },
              {
                name: "黑龙江",
                value: 945
              },
              {
                name: "湖南",
                value: 1019
              },
              {
                name: "安徽",
                value: 991
              },
              {
                name: "山东",
                value: 790
              },
              {
                name: "新疆",
                value: 76
              },
              {
                name: "江苏",
                value: 653
              },
              {
                name: "浙江",
                value: 1268
              },
              {
                name: "江西",
                value: 937
              },
              {
                name: "湖北",
                value: 68135
              },
              {
                name: "广西",
                value: 254
              },
              {
                name: "甘肃",
                value: 139
              },
              {
                name: "山西",
                value: 198
              },
              {
                name: "内蒙古",
                value: 232
              },
              {
                name: "陕西",
                value: 308
              },
              {
                name: "吉林",
                value: 155
              },
              {
                name: "福建",
                value: 358
              },
              {
                name: "贵州",
                value: 147
              },
              {
                name: "广东",
                value: 1593
              },
              {
                name: "青海",
                value: 18
              },
              {
                name: "西藏",
                value: 1
              },
              {
                name: "四川",
                value: 564
              },
              {
                name: "宁夏",
                value: 75
              },
              {
                name: "海南",
                value: 1019
              },
              {
                name: "台湾",
                value: 442
              },
              {
                name: "香港",
                value: 1079
              },
              {
                name: "澳门",
                value: 45
              }
            ]
          }
        ]
      },
      left1_option: {
        backgroundColor: "#0f375f",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              show: true,
              backgroundColor: "#333"
            }
          }
        },
        legend: {
          data: ["现有确诊", "累计确诊"],
          textStyle: {
            color: "#ccc"
          }
        },
        grid: {
          left: 0,
          right: 0,
          top: 25,
          bottom: 0,
          containLabel: true
        },
        xAxis: {
          data: ["亚洲", "欧洲", "北美洲", "南美洲", "大洋洲", "非洲", "其他"],
          axisLine: {
            lineStyle: {
              color: "#ccc"
            }
          },
          axisLabel: {
            fontSize: 9
          }
        },
        yAxis: {
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: "#ccc"
            }
          },
          axisLabel: {
            formatter(value) {
              return value / 10000 + "万";
            }
          }
        },
        series: [
          {
            type: "line",
            tooltip: {
              show: false
            },
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 10,
            data: [335538, 853798, 1180312, 285545, 606, 53839, 46]
          },
          {
            name: "现有确诊",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#14c8d4" },
                  { offset: 1, color: "#43eec6" }
                ])
              }
            },
            data: [335538, 853798, 1180312, 285545, 606, 53839, 46]
          },
          {
            name: "累计确诊",
            type: "bar",
            barGap: "-100%",
            barWidth: 10,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(20,200,212,0.5)" },
                  { offset: 0.2, color: "rgba(20,200,212,0.2)" },
                  { offset: 1, color: "rgba(20,200,212,0)" }
                ])
              }
            },
            z: -12,
            data: [929974, 1826258, 1741757, 488192, 8840, 93534, 712]
          },
          {
            type: "pictorialBar",
            tooltip: {
              show: false
            },
            symbol: "rect",
            itemStyle: {
              normal: {
                color: "#0f375f"
              }
            },
            symbolRepeat: true,
            symbolSize: [12, 4],
            symbolMargin: 1,
            z: -10,
            data: [929974, 1826258, 1741757, 488192, 8840, 93534, 712]
          }
        ]
      },
      left2_option: {
        backgroundColor: "#101736",
        color: ["#00c2ff", "#f9cf67", "#e92b77", "#60cda0"],
        legend: {
          show: true,
          bottom: 0,
          itemWidth: 12,
          itemHeight: 12,
          textStyle: {
            fontSize: 12,
            color: "#ade3ff"
          }
        },
        radar: [
          {
            indicator: [
              {
                text: "累计确诊"
              },
              {
                text: "现有确诊"
              },
              {
                text: "治愈"
              },
              {
                text: "死亡"
              },
              {
                text: "疑似病例"
              }
            ],
            textStyle: {
              color: "red"
            },
            center: ["50%", "50%"],
            radius: 60,
            splitNumber: 5,
            orient: "horizontal",
            name: {
              formatter: "{value}",
              textStyle: {
                fontSize: 12,
                color: "#5b81cb" //外圈标签字体颜色
              }
            },
            nameGap: 5,
            splitArea: {
              show: true,
              areaStyle: {
                color: ["#141c42", "#141c42"] // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
              }
            },
            axisLine: {
              lineStyle: {
                color: "#153269"
              }
            },
            splitLine: {
              lineStyle: {
                color: "#113865", // 分隔线颜色
                width: 1 // 分隔线线宽
              }
            }
          }
        ],
        tooltip: {
          show: true,
          trigger: "item"
        },
        series: [
          {
            name: "雷达图",
            type: "radar",
            itemStyle: {
              emphasis: {
                lineStyle: {
                  width: 4
                }
              }
            },
            data: [
              {
                name: "截止2.1",
                value: [11889, 11634, 255, 259, 17988],
                areaStyle: {
                  normal: {
                    color: {
                      type: "linear",
                      colorStops: [
                        {
                          offset: 0,
                          color: "#00c2ff"
                        },
                        {
                          offset: 0.5,
                          color: "rgba(0,0,0,0)"
                        },
                        {
                          offset: 1,
                          color: "#00c2ff"
                        }
                      ],
                      globalCoord: false
                    }
                  }
                },
                symbolSize: 2, // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
                itemStyle: {
                  normal: {
                    borderColor: "#00c2ff",
                    borderWidth: 2.5
                  }
                }
              },
              {
                name: "截止3.1",
                value: [79824, 35329, 41625, 2870, 851],
                symbolSize: 2,
                itemStyle: {
                  normal: {
                    borderColor: "#f9cf67",
                    borderWidth: 2.5
                  }
                },
                areaStyle: {
                  normal: {
                    color: {
                      type: "linear",
                      colorStops: [
                        {
                          offset: 0,
                          color: "#f9cf67"
                        },
                        {
                          offset: 0.5,
                          color: "rgba(0,0,0,0)"
                        },
                        {
                          offset: 1,
                          color: "#f9cf67"
                        }
                      ],
                      globalCoord: false
                    }
                  }
                }
              },
              {
                name: "截止4.1",
                value: [81589, 1863, 76408, 3318, 253],
                symbolSize: 2,
                itemStyle: {
                  normal: {
                    borderColor: "#e92b77",
                    borderWidth: 2.5
                  }
                },
                areaStyle: {
                  normal: {
                    color: {
                      type: "linear",
                      colorStops: [
                        {
                          offset: 0,
                          color: "#e92b77"
                        },
                        {
                          offset: 0.5,
                          color: "rgba(0,0,0,0)"
                        },
                        {
                          offset: 1,
                          color: "#e92b77"
                        }
                      ],
                      globalCoord: false
                    }
                  }
                }
              },
              {
                name: "截止5.1",
                value: [82875, 557, 77685, 4633, 11],
                symbolSize: 2,
                itemStyle: {
                  normal: {
                    borderColor: "#60cda0",
                    borderWidth: 2.5
                  }
                },
                areaStyle: {
                  normal: {
                    color: {
                      type: "linear",
                      colorStops: [
                        {
                          offset: 0,
                          color: "#60cda0"
                        },
                        {
                          offset: 0.5,
                          color: "rgba(0,0,0,0)"
                        },
                        {
                          offset: 1,
                          color: "#60cda0"
                        }
                      ],
                      globalCoord: false
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      left3_option: {
        title: {
          top: "50%",
          left: "center",
          text: "现今治愈率",
          textStyle: {
            color: "#222",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 12
          },
          subtext: 92.47 + "%",
          subtextStyle: {
            color: "#222",
            fontSize: 12
          }
        },
        tooltip: {
          trigger: "item",
          formatter: function(res) {
            if (res.componentSubType != "liquidFill") {
              return (
                '<span class="ii" style="background:' +
                res.color +
                ' "></span>' +
                res.name +
                ":<br/> " +
                res.data.value +
                "%"
              );
            }
          }
        },
        series: [
          {
            type: "liquidFill",
            itemStyle: {
              normal: {
                opacity: 0.4,
                shadowBlur: 0,
                shadowColor: "blue"
              }
            },
            name: "治愈率",
            data: [
              {
                value: 0.9247,
                itemStyle: {
                  normal: {
                    color: "#53d5ff",
                    opacity: 0.6
                  }
                }
              }
            ],
            radius: "62%",
            color: ["#53d5ff"],
            center: ["50%", "60%"],
            label: {
              normal: {
                formatter: "",
                textStyle: {
                  fontSize: 12
                }
              }
            },
            outline: {
              itemStyle: {
                borderColor: "#86c5ff",
                borderWidth: 0
              },
              borderDistance: 0
            }
          },
          {
            type: "pie",
            radius: ["62%", "70%"],
            center: ["50%", "60%"],
            color: ["#c487ee", "#deb140", "#49dff0", "#00ffb4"],
            label: {
              show: true,
              normal: {
                formatter: "{b}\n{d}%",
                show: true
              }
            },
            labelLine: {
              length: 3,
              length2: 5,
              smooth: true
            },
            itemStyle: {
              emphasis: {
                borderWidth: 0,
                shadowBlur: 2,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            data: [
              {
                value: 92.47,
                name: "治愈率"
              },
              {
                value: 5.38,
                name: "死亡率"
              },
              {
                value: 1.98,
                name: "境外输入确诊占比"
              },
              {
                value: 0.16,
                name: "现有确诊占比"
              }
            ]
          }
        ]
      },
      right1_option: {
        legend: {
          textStyle: {
            color: "#fff"
          }
        },
        tooltip: {
          show: true,
          formatter: "{b}:{c}%"
        },
        grid: {
          left: "5%",
          top: 0,
          right: "1%",
          bottom: 2,
          containLabel: true
        },
        xAxis: {
          type: "value",
          show: false,
          position: "top",
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#fff"
            }
          },
          splitLine: {
            show: false
          }
        },
        yAxis: [
          {
            type: "category",
            axisTick: {
              show: false,
              alignWithLabel: false,
              length: 5
            },
            splitLine: {
              //网格线
              show: false
            },
            inverse: "true", //排序
            axisLine: {
              show: false,
              lineStyle: {
                color: "#fff"
              }
            },
            axisLabel: {
              fontSize: 9
            },
            data: [
              "医疗救助",
              "防护物资",
              "疫情进展",
              "快递物流",
              "抗流感药品",
              "日用品",
              "餐饮外卖",
              "开学复工",
              "其他"
            ]
          }
        ],
        series: [
          {
            name: "占比（%）",
            type: "bar",
            label: {
              normal: {
                show: true,
                position: "right",
                formatter: "{c}",
                textStyle: {
                  color: "white" //color of value
                }
              }
            },
            itemStyle: {
              normal: {
                show: true,
                color: function(params) {
                  const colorArray = [
                    {
                      top: "#ffa800", //黄
                      bottom: "rgba(11,42,84,.3)"
                    },
                    {
                      top: "#1ace4a", //绿
                      bottom: "rgba(11,42,84, 0.3)"
                    },
                    {
                      top: "#4bf3ff", //蓝
                      bottom: "rgba(11,42,84,.3)"
                    },
                    {
                      top: "#4f9aff", //深蓝
                      bottom: "rgba(11,42,84,.3)"
                    },
                    {
                      top: "#b250ff", //粉
                      bottom: "rgba(11,42,84,.3)"
                    }
                  ];
                  let num = colorArray.length;
                  return {
                    type: "linear",
                    colorStops: [
                      {
                        offset: 0,
                        color: colorArray[params.dataIndex % num].bottom
                      },
                      {
                        offset: 1,
                        color: colorArray[params.dataIndex % num].top
                      },
                      {
                        offset: 0,
                        color: colorArray[params.dataIndex % num].bottom
                      },
                      {
                        offset: 1,
                        color: colorArray[params.dataIndex % num].top
                      },
                      {
                        offset: 0,
                        color: colorArray[params.dataIndex % num].bottom
                      },
                      {
                        offset: 1,
                        color: colorArray[params.dataIndex % num].top
                      },
                      {
                        offset: 0,
                        color: colorArray[params.dataIndex % num].bottom
                      },
                      {
                        offset: 1,
                        color: colorArray[params.dataIndex % num].top
                      },
                      {
                        offset: 0,
                        color: colorArray[params.dataIndex % num].bottom
                      },
                      {
                        offset: 1,
                        color: colorArray[params.dataIndex % num].top
                      }
                    ]
                  };
                },
                barBorderRadius: 70,
                borderWidth: 0,
                borderColor: "#333"
              }
            },
            barGap: "0%",
            barCategoryGap: "50%",
            data: [22, 20, 17, 13, 9, 8, 6, 3, 2]
          }
        ]
      },
      right2_option: {
        backgroundColor: "#11183c",
        grid: {
          left: 0,
          right: 10,
          top: 30,
          bottom: 2,
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: "item"
        },
        legend: {
          show: true,
          x: "center",
          y: 2,
          icon: "stack",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "#1bb4f6"
          }
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              color: "#30eee9",
              fontSize: 9
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#397cbc"
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#195384"
              }
            },
            data: ["中国", "巴西", "美国", "俄罗斯", "印度", "英国", "法国"]
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter(value) {
                return value/10000+"万"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#27b4c2"
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#11366e"
              }
            }
          }
        ],
        series: [
          {
            name: "累计确诊",
            type: "line",
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#0092f6",
                lineStyle: {
                  color: "#0092f6",
                  width: 1
                },
                areaStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(7,44,90,0.3)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,146,246,0.9)"
                    }
                  ])
                }
              }
            },
            markPoint: {
              itemStyle: {
                normal: {
                  color: "red"
                }
              }
            },
            data: [84506, 271885, 1741757, 308705, 106886, 248818, 180809]
          },
          {
            name: "现有确诊",
            type: "line",
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#00d4c7",
                lineStyle: {
                  color: "#00d4c7",
                  width: 1
                },
                areaStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(7,44,90,0.3)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,212,199,0.9)"
                    }
                  ])
                }
              }
            },
            data: [142, 147108, 1179836, 220341, 61274, 211559, 90224]
          },
          {
            name: "死亡",
            type: "line",
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#aecb56",
                lineStyle: {
                  color: "#aecb56",
                  width: 1
                },
                areaStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(7,44,90,0.3)"
                    },
                    {
                      offset: 1,
                      color: "rgba(114,144,89,0.9)"
                    }
                  ])
                }
              }
            },
            data: [4645, 17983, 106397, 2972, 3303, 35341, 28022]
          },
          {
            name: "治愈",
            type: "line",
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#ff9f7f",
                lineStyle: {
                  color: "#ff9f7f",
                  width: 1
                },
                areaStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(190,144,117,0.3)"
                    },
                    {
                      offset: 1,
                      color: "rgba(98,144,41,0.9)"
                    }
                  ])
                }
              }
            },
            data: [79719, 106794, 455524, 85392, 42309, 1918, 62563]
          }
        ]
      },
      right3_option: {
        backgroundColor: "rgb(43, 51, 59)",
        tooltip: {
          trigger: "item",
          formatter: "{a}<br/>{b}:{c}人"
        },
        title: {
          text: "广东省境外输入病例外国国籍",
          left: "center",
          bottom: 0,
          textStyle: {
            color: "#ccc",
            fontSize: 15
          }
        },
        series: [
          {
            name: "统计截止2020.4.12",
            type: "pie",
            radius: [20, 120],
            avoidLabelOverlap: false,
            startAngle: 0,
            center: ["50%", "1%"],
            roseType: "area",
            selectedMode: "single",
            label: {
              normal: {
                show: true,
                formatter: "{c}人"
              },
              emphasis: {
                show: true
              }
            },
            labelLine: {
              normal: {
                show: true,
                smooth: true,
                length: 0,
                length2: 0
              },
              emphasis: {
                show: true
              }
            },
            data: [
              {
                value: 9,
                name: "尼日利亚",
                itemStyle: {
                  normal: {
                    color: "#f845f1"
                  }
                }
              },
              {
                value: 3,
                name: "安哥拉",
                itemStyle: {
                  normal: {
                    color: "#ad46f3"
                  }
                }
              },
              {
                value: 3,
                name: "巴西",
                itemStyle: {
                  normal: {
                    color: "#5045f6"
                  }
                }
              },
              {
                value: 3,
                name: "法国",
                itemStyle: {
                  normal: {
                    color: "#4777f5"
                  }
                }
              },
              {
                value: 3,
                name: "英国",
                itemStyle: {
                  normal: {
                    color: "#44aff0"
                  }
                }
              },
              {
                value: 2,
                name: "几内亚",
                itemStyle: {
                  normal: {
                    color: "#45dbf7"
                  }
                }
              },
              {
                value: 2,
                name: "尼泊尔",
                itemStyle: {
                  normal: {
                    color: "#f6d54a"
                  }
                }
              },
              {
                value: 2,
                name: "刚果",
                itemStyle: {
                  normal: {
                    color: "#f69846"
                  }
                }
              },
              {
                value: 1,
                name: "美国",
                itemStyle: {
                  normal: {
                    color: "#ff4343"
                  }
                }
              },
              {
                value: 1,
                name: "澳大利亚",
                itemStyle: {
                  normal: {
                    color: "#f845f1"
                  }
                }
              },
              {
                value: 1,
                name: "马达加斯加",
                itemStyle: {
                  normal: {
                    color: "#ad46f3"
                  }
                }
              },
              {
                value: 1,
                name: "塞拉昂里",
                itemStyle: {
                  normal: {
                    color: "#5045f6"
                  }
                }
              },
              {
                value: 1,
                name: "埃塞俄比亚",
                itemStyle: {
                  normal: {
                    color: "#4777f5"
                  }
                }
              },
              {
                value: 1,
                name: "布基纳法索",
                itemStyle: {
                  normal: {
                    color: "#44aff0"
                  }
                }
              },
              {
                value: 1,
                name: "俄罗斯",
                itemStyle: {
                  normal: {
                    color: "#45dbf7"
                  }
                }
              },
              {
                value: 1,
                name: "越南",
                itemStyle: {
                  normal: {
                    color: "#f6d54a"
                  }
                }
              },
              {
                value: 1,
                name: "哥伦比亚",
                itemStyle: {
                  normal: {
                    color: "#f69846"
                  }
                }
              },
              {
                value: 1,
                name: "荷兰",
                itemStyle: {
                  normal: {
                    color: "#ff4343"
                  }
                }
              },
              {
                value: 1,
                name: "叙利亚",
                itemStyle: {
                  normal: {
                    color: "#ff4343"
                  }
                }
              },
              {
                value: 0
              },
              {
                value: 0
              },
              {
                value: 0
              },
              {
                value: 0
              },
              {
                value: 0
              },
              {
                value: 0
              },
              {
                value: 0
              },
              {
                value: 0
              },
              {
                value: 0
              },
              {
                value: 0
              },
              {
                value: 0
              },
              {
                value: 0
              },
              {
                value: 0
              },
              {
                value: 0
              },
              {
                value: 0
              },
              {
                value: 0
              },
              {
                value: 0
              },
              {
                value: 0
              },
              {
                value: 0
              }
            ]
          }
        ]
      }
    };
  },
  methods: {}
};
</script>
 
<style scoped>
.china-map {
  display: flex;
  height: 90%;
  width: 100%;
}
.column {
  flex: 1 1 auto;
  width: 25%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 0.125rem;
}
.column:nth-child(2) {
  flex: 2 1 auto;
  width: 50%;
}
.item {
  position: relative;
  width: 100%;
  height: 30%;
  z-index: 5;
}
.item img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  z-index: -2;
}
.item .in-item {
  position: absolute;
  opacity: 0.8;
  top: 0;
  left: 0;
}
/* .item:hover::before,
.item:hover::after {
  display: block;
} */
.item::before {
  /* display: none; */
  content: "";
  position: absolute;
  border: solid springgreen;
  z-index: -1;
  animation: bordermove1 5s linear infinite;
}
.item::after {
  /* display: none; */
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
  background: rgba(101, 132, 226, 0.1);
  border: 0.0125rem solid rgba(25, 186, 139, 0.17);
}
.top .show-data {
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  flex: auto;
  text-align: center;
}
.show-data p:first-child {
  font-family: "electronicFont";
  font-size: 0.3125rem;
}
.show-data::after {
  content: "";
  position: absolute;
  top: 25%;
  right: 0;
  height: 50%;
  width: 0.0125rem;
  background: rgba(255, 255, 255, 0.2);
}
.show-data:last-child::after {
  display: none;
}

.bottom {
  height: 90%;
  width: 100%;
}
.wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.map {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
}

.map-ball {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4.6rem;
  height: 4.6rem;
  background: url("../../assets/img/map.png");
  background-size: 100% 100%;
  opacity: 0.3;
}
.map-rotate1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 5rem;
  height: 5rem;
  background: url("../../assets/img/lbx.png");
  background-size: 100% 100%;
  opacity: 0.6;
  animation: rotate1 15s linear infinite;
}
.map-rotate2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 5rem;
  height: 5rem;
  background: url("../../assets/img/jt.png");
  background-size: 100% 100%;
  opacity: 0.6;
  animation: rotate2 10s linear infinite;
}
/* 旋转动画 */
@keyframes rotate1 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes rotate2 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
</style>