import React, { Component } from 'react'
import echarts from 'echarts'
import 'echarts/map/js/china'
import geoJson from 'echarts/map/json/china.json'
// import { geoCoordMap, provienceData } from './geo'
import { BorderBox1 ,BorderBox8 ,BorderBox13,Decoration1 ,ScrollBoard,ScrollRankingBoard } from '@jiaminghi/data-view-react'
// import { Decoration9 ,Loading} from '@jiaminghi/data-view-react'
import './index.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myChart1: null,
      myChart2: null,
      myChart3: null,
      myChart4: null,
      myChart5: null,
      myChart6: null,
      topdata:{data: [
        {
          name: '周口',
          value: 55
        },
        {
          name: '南阳',
          value: 120
        },
        {
          name: '西峡',
          value: 78
        },
        {
          name: '驻马店',
          value: 66
        },
        {
          name: '新乡',
          value: 80
        },
        {
          name: '信阳',
          value: 45
        },
        {
          name: '漯河',
          value: 29
        }
      ],
      carousel: 'page'},
    tabledata:{
      header: ['列1', '列2', '列3'],
      data: [
        ['行1列1', '行1列2', '行1列3'],
        ['行2列1', '行2列2', '行2列3'],
        ['行3列1', '行3列2', '行3列3'],
        ['行4列1', '行4列2', '行4列3'],
        ['行5列1', '行5列2', '行5列3'],
        ['行6列1', '行6列2', '行6列3'],
        ['行7列1', '行7列2', '行7列3'],
        ['行8列1', '行8列2', '行8列3'],
        ['行9列1', '行9列2', '行9列3'],
        ['行10列1', '行10列2', '行10列3']
      ],
      index: true,
      columnWidth: [50],
      align: ['center']
    }
    }
  }
  componentDidMount() {
    this.initalECharts()
    this.initalECharts1()
    this.initalECharts2()
    this.initalECharts3()
    this.initalECharts4()
    this.initalECharts5()
    const that = this
    window.onresize = function() {
      console.log(that.state.myChart1,'2222222222222')
      that.state.myChart1.resize()
      that.state.myChart2.resize()
      that.state.myChart3.resize()
      that.state.myChart4.resize()
      that.state.myChart5.resize()
      that.state.myChart6.resize()
    }
  }
  initalECharts5() {
    this.setState(
      { myChart6: echarts.init(document.getElementById('mainMap3')) },
      () => {
        this.state.myChart6.setOption({
          title: {
            show: true,
            text: '近6个月观众活跃趋势',
            x: 'center',
            textStyle: {
              //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: 'normal',
              color: '#01c4f7'
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['观看人数、次数（个）', '场均观看数（场）'],
            textStyle: {
              fontSize: 12,
              color: '#ffffff'
            },
            top: 20,
            itemWidth: 20, // 设置宽度

            itemHeight: 12, // 设置高度

            itemGap: 10 // 设置间距
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '五月', '6月'],
            splitLine: {
              show: true,
              lineStyle: {
                color: ['#07234d']
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#c3dbff', //更改坐标轴文字颜色
                fontSize: 12 //更改坐标轴文字大小
              }
            }
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            splitLine: {
              show: true,
              lineStyle: {
                color: ['#07234d']
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#c3dbff', //更改坐标轴文字颜色
                fontSize: 12 //更改坐标轴文字大小
              }
            }
          },
          series: [
            {
              name: '观看人数、次数（个）',
              type: 'bar',
              data: [140, 170, 90,180, 90, 90],
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#9408fc' },
                  { offset: 1, color: '#05aed3' }
                ])
              }
            },
            {
              name: '场均观看数（场）',
              type: 'bar',
              data: [120, 130, 80, 130, 120, 120],
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#13b985' },
                  { offset: 1, color: '#dc9b18' }
                ])
              }
            }
          ]
        })
      }
    )
  }
  initalECharts4() {
    this.setState(
      { myChart5: echarts.init(document.getElementById('mainMap2')) },
      () => {
        this.state.myChart5.setOption({
          title: {
            show: true,
            text: '近6个月主播活跃趋势',
            x: 'center',
            textStyle: {
              //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: 'normal',
              color: '#01c4f7'
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['开播主播数（个）', '开播场次数（场）'],
            textStyle: {
              fontSize: 12,
              color: '#ffffff'
            },
            top: 20,
            itemWidth: 20, // 设置宽度

            itemHeight: 12, // 设置高度

            itemGap: 10 // 设置间距
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '五月', '6月'],
            splitLine: {
              show: true,
              lineStyle: {
                color: ['#07234d']
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#c3dbff', //更改坐标轴文字颜色
                fontSize: 12 //更改坐标轴文字大小
              }
            }
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            splitLine: {
              show: true,
              lineStyle: {
                color: ['#07234d']
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#c3dbff', //更改坐标轴文字颜色
                fontSize: 12 //更改坐标轴文字大小
              }
            }
          },
          series: [
            {
              name: '开播主播数（个）',
              type: 'bar',
              data: [140, 170, 90,180, 90, 90],
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#9408fc' },
                  { offset: 1, color: '#05aed3' }
                ])
              }
            },
            {
              name: '开播场次数（场）',
              type: 'bar',
              data: [120, 130, 80, 130, 120, 120],
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#13b985' },
                  { offset: 1, color: '#dc9b18' }
                ])
              }
            }
          ]
        })
      }
    )
  }
  initalECharts3() {
    this.setState(
      { myChart4: echarts.init(document.getElementById('countyMap')) },
      () => {
        this.state.myChart4.setOption({
          color: ['#ff832e', '#37cbff', '#b3e269'],
          legend: {
            top: 30,
            data: ['美妆', '理财', '教育', '母婴', '百货'],
            textStyle: {
              fontSize: 12,
              color: '#ffffff'
            },
            icon: 'circle',
            itemWidth: 10, // 设置宽度

            itemHeight: 10, // 设置高度

            itemGap: 10 // 设置间距
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            splitLine: {
              show: true,
              lineStyle: {
                color: ['#07234d']
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#c3dbff', //更改坐标轴文字颜色
                fontSize: 12 //更改坐标轴文字大小
              }
            }
          },
          yAxis: {
            type: 'category',
            data: ['上海', '广州', '杭州', '天津', '北京', '厦门', '合肥'],
            axisLabel: {
              show: true,
              textStyle: {
                color: '#c3dbff', //更改坐标轴文字颜色
                fontSize: 12 //更改坐标轴文字大小
              }
            }
          },
          series: [
            {
              name: '美妆',
              type: 'bar',
              stack: '总量',
              label: {
                show: false,
                position: 'insideRight'
              },
              data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
              name: '理财',
              type: 'bar',
              stack: '总量',
              label: {
                show: false,
                position: 'insideRight'
              },
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '教育',
              type: 'bar',
              stack: '总量',
              label: {
                show: false,
                position: 'insideRight'
              },
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '母婴',
              type: 'bar',
              stack: '总量',
              label: {
                show: false,
                position: 'insideRight'
              },
              data: [150, 212, 201, 154, 190, 330, 410]
            },
            {
              name: '百货',
              type: 'bar',
              stack: '总量',
              label: {
                show: false,
                position: 'insideRight'
              },
              data: [820, 832, 901, 934, 1290, 1330, 1320]
            }
          ]
        })
      }
    )
  }
  initalECharts2() {
    this.setState(
      { myChart3: echarts.init(document.getElementById('cityMap')) },
      () => {
        this.state.myChart3.setOption({
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: '#d000d0' // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#7006d9' // 100% 处的颜色
              }
            ],
            globalCoord: false
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'value',
              splitLine: {
                show: true,
                lineStyle: {
                  color: ['#07234d']
                }
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#c3dbff', //更改坐标轴文字颜色
                  fontSize: 12 //更改坐标轴文字大小
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'category',
              data: ['科技', '母婴', '男士', '美妆', '珠宝', '宠物'],
              axisTick: {
                alignWithLabel: true
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#c3dbff', //更改坐标轴文字颜色
                  fontSize: 12 //更改坐标轴文字大小
                }
              }
            }
          ],
          series: [
            {
              name: '直接访问',
              type: 'bar',
              barWidth: '60%',
              data: [10, 52, 200, 334, 390, 330]
            }
          ]
        })
      }
    )
  }
  initalECharts1() {
    this.setState(
      { myChart2: echarts.init(document.getElementById('provinceMap')) },
      () => {
        this.state.myChart2.setOption({
          color: ['#9702fe', '#ff893b', '#37cbff', '#d90051', '#b2e269'],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            top: 30,
            right: '20%',
            data: ['美妆', '百度', '教育', '理财', '母婴'],
            textStyle: {
              fontSize: 12,
              color: '#ffffff'
            },
            icon: 'circle',
            itemWidth: 10, // 设置宽度

            itemHeight: 10, // 设置高度

            itemGap: 10 // 设置间距
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '70%'],
              center: ['35%', '50%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 335, name: '美妆' },
                { value: 310, name: '百度' },
                { value: 234, name: '教育' },
                { value: 135, name: '理财' },
                { value: 1548, name: '母婴' }
              ]
            }
          ]
        })
      }
    )
  }
  initalECharts() {
    echarts.registerMap('zhongguo', geoJson)
    const flyGeo = {
      洛阳: [112.460299, 34.62677],
      西安: [108.946466, 34.347269],
      兰州: [103.84044, 36.067321],
      乌鲁木齐: [87.62444, 43.830763],
      包头: [109.846544, 40.662929],
      西宁: [101.78443, 36.623393],
      银川: [106.258602, 38.487834],
      成都: [104.081534, 30.655822],
      重庆: [106.558434, 29.568996],
      拉萨: [91.120789, 29.65005],
      昆明: [102.852448, 24.873998],
      贵阳: [106.636577, 26.653325],
      太原: [112.534919, 37.873219],
      武汉: [114.311582, 30.598467],
      长沙: [112.945473, 28.234889],
      南昌: [115.864589, 28.689455],
      合肥: [117.233443, 31.826578],
      杭州: [120.215503, 30.253087],
      广州: [113.271431, 23.135336],
      北京: [116.413384, 39.910925],
      天津: [117.209523, 39.093668]
    }

    //飞线数据
    const flyVal = [
      [{ name: '洛阳' }, { name: '洛阳', value: 100 }],
      [{ name: '洛阳' }, { name: '西安', value: 35 }],
      [{ name: '洛阳' }, { name: '兰州', value: 25 }],
      [{ name: '洛阳' }, { name: '乌鲁木齐', value: 55 }],
      [{ name: '洛阳' }, { name: '包头', value: 60 }],
      [{ name: '洛阳' }, { name: '西宁', value: 45 }],
      [{ name: '洛阳' }, { name: '银川', value: 35 }],
      [{ name: '洛阳' }, { name: '成都', value: 35 }],
      [{ name: '洛阳' }, { name: '重庆', value: 40 }],
      [{ name: '洛阳' }, { name: '拉萨', value: 205 }],
      [{ name: '洛阳' }, { name: '昆明', value: 50 }],
      [{ name: '洛阳' }, { name: '贵阳', value: 55 }],
      [{ name: '洛阳' }, { name: '太原', value: 60 }],
      [{ name: '洛阳' }, { name: '武汉', value: 65 }],
      [{ name: '洛阳' }, { name: '长沙', value: 70 }],
      [{ name: '洛阳' }, { name: '南昌', value: 75 }],
      [{ name: '洛阳' }, { name: '合肥', value: 80 }],
      [{ name: '洛阳' }, { name: '杭州', value: 85 }],
      [{ name: '洛阳' }, { name: '广州', value: 90 }],
      [{ name: '洛阳' }, { name: '北京', value: 95 }],
      [{ name: '洛阳' }, { name: '天津', value: 60 }]
    ]
    //数据转换，转换后格式：[{fromName:'cityName', toName:'cityName', coords:[[lng, lat], [lng, lat]]}, {...}]

    //数据转换，转换后格式：[{fromName:'cityName', toName:'cityName', coords:[[lng, lat], [lng, lat]]}, {...}]
    const convertFlyData = function(data) {
      let res = []
      for (let i = 0; i < data.length; i++) {
        let dataItem = data[i]
        let toCoord = flyGeo[dataItem[0].name]
        let fromCoord = flyGeo[dataItem[1].name]
        if (fromCoord && toCoord) {
          res.push({
            fromName: dataItem[1].name,
            toName: dataItem[0].name,
            coords: [fromCoord, toCoord]
          })
        }
      }
      return res
    }
    //报表配置
    const originName = '浙江'
    const flySeries = []
    ;[[originName, flyVal]].forEach(function(item, i) {
      flySeries.push(
        {
          name: item[0],
          type: 'lines',
          zlevel: 1,
          symbol: ['none', 'none'],
          symbolSize: 0,
          effect: {
            //特效线配置
            show: true,
            period: 5, //特效动画时间，单位s
            trailLength: 0.1, //特效尾迹的长度，从0到1
            symbol: 'arrow',
            symbolSize: 5
          },
          lineStyle: {
            normal: {
              color: '#f19000',
              width: 1,
              opacity: 0.6,
              curveness: 0.2 //线的平滑度
            }
          },
          data: convertFlyData(item[1])
        },
        {
          name: item[0],
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
            //涟漪特效
            period: 5, //特效动画时长
            scale: 4, //波纹的最大缩放比例
            brushType: 'stroke' //波纹的绘制方式：stroke | fill
          },
          label: {
            normal: {
              show: false,
              position: 'right',
              formatter: '{b}'
            }
          },
          symbol: 'circle',
          symbolSize: function(val) {
            //根据某项数据值设置符号大小
            return val[2] / 10
          },
          itemStyle: {
            normal: {
              color: '#f19000'
            }
          },
          data: item[1].map(function(dataItem) {
            return {
              name: dataItem[1].name,
              value: flyGeo[dataItem[1].name].concat([dataItem[1].value])
            }
          })
        },
        {
          //与上层的点叠加
          name: item[0],
          type: 'scatter',
          coordinateSystem: 'geo',
          zlevel: 3,
          symbol: 'circle',
          symbolSize: function(val) {
            //根据某项数据值设置符号大小
            return val[2] / 15
          },
          itemStyle: {
            normal: {
              color: '#f00'
            }
          },
          data: item[1].map(function(dataItem) {
            return {
              name: dataItem[1].name,
              value: flyGeo[dataItem[1].name].concat([dataItem[1].value])
            }
          })
        }
      )
    })

    this.setState(
      { myChart1: echarts.init(document.getElementById('mainMap')) },
      () => {
        this.state.myChart1.setOption({
          tooltip: {
            trigger: 'item'
          },
         
          visualMap: {
            // orient: 'horizontal',
            min: 0,
            left: '20%',
            max: 10000,
            text: ['高', '低'], // 文本，默认为数值文本
            splitNumber: 0,
            color: ['#0054bb', '#85ADDE'],
            textStyle: {
              color: '#c3dbff'
            }
          },

          series: [
            {
              name: '2011全国GDP分布',
              type: 'map',
              mapType: 'china',
              mapLocation: {
                x: 'left'
              },
              // selectedMode: 'multiple',
              itemStyle: {
                normal: { label: { show: true, color: '#fff' }, borderWidth: 0 }
                // emphasis: { label: { show: true } },
                // borderWidth: 0,
                // borderColor: '#eee',
              },

              data: [
                { name: '西藏', value: 700 },
                { name: '青海', value: 1670.44 },
                { name: '宁夏', value: 2102.21 },
                { name: '海南', value: 2522.66 },
                { name: '甘肃', value: 5020.37 },
                { name: '贵州', value: 5701.84 },
                { name: '新疆', value: 6610.05 },
                { name: '云南', value: 22 },
                { name: '重庆', value: 500 },
                { name: '吉林', value: 1000 },
                { name: '山西', value: 5000 },
                { name: '天津', value: 4000 },
                { name: '江西', value: 9000 },
                { name: '广西', value: 689 },
                { name: '陕西', value: 9982 },
                { name: '黑龙江', value: 12582 },
                { name: '内蒙古', value: 14359.88 },
                { name: '安徽', value: 22 },
                { name: '北京', value: 800 },
                { name: '福建', value: 1223 },
                { name: '上海', value: 19195.69 },
                { name: '湖北', value: 537 },
                { name: '湖南', value: 8872 },
                { name: '四川', value: 21026.68 },
                { name: '辽宁', value: 22226.7 },
                { name: '河北', value: 24515.76 },
                { name: '河南', value: 26931.03 },
                { name: '浙江', value: 32318.85 },
                { name: '山东', value: 45361.85 },
                { name: '江苏', value: 49110.27 },
                { name: '广东', value: 53210.28 },
                { name: '台湾', value: 53210.28 },
                { name: '南海诸岛', value: 53210.28 }
              ]
            }
          ]
        })
      }
    )
  }
  
  render() { 
    const { topdata ,tabledata} = this.state
    return ( 
      <div className="data">
        <header className="header_main">
          <div className="left_bg"></div>
          <div className="right_bg"></div>
          <h3>Baby张数据平台</h3>
        </header>
        <div className="wrapper">
          <div className="container-fluid">
            <div className="row fill-h" style={{ display: 'flex' }}>
              <div className="col-lg-3 fill-h" style={{ width: '25%' }}>
                <div className="xpanel-wrapper xpanel-wrapper-5">
                  <BorderBox13>
                    <div className="xpanel">
                      <div className="fill-h" id="mainMap1">
                        {/* <Loading style={{color:'#fff'}}>加载中...</Loading> */}
                        <ScrollRankingBoard config={topdata}/>
                      </div>
                    </div>
                  </BorderBox13>
                </div>
                <div className="xpanel-wrapper xpanel-wrapper-4">
                  <BorderBox13>
                    <div className="xpanel">
                      <div className="fill-h" id="worldMap">
                      <ScrollBoard config={tabledata}  />
                      </div>
                    </div>
                  </BorderBox13>
                </div>
              </div>
              <div className="col-lg-6 fill-h" style={{ width: '50%' }}>
                <div className="xpanel-wrapper xpanel-wrapper-5">
                  <div
                    className="xpanel"
                    style={{
                      position: 'relative'
                    }}
                  >
                    <div className="map_bg"></div>
                    <div className="circle_allow"></div>
                    <div className="circle_bg"></div>
                    
                    
                    <div style={{width:'100%', position:'absolute',top:10,display:'flex',left:'50%', justifyContent:'center',color:'#fff',alignItems:'center',transform:'translateX(-50%)'}}>
                      <p>全国淘宝主播数量：</p>
                      <div className="databg">6</div>
                      <div className="databg">6</div>
                      <div className="databg">6</div>
                      <div className="databg">6</div>
                      <div className="databg">6</div>
                      <div className="databg">6</div>
                      <div className="databg">6</div>
                      <div className="databg">6</div>
                      <div className="databg">6</div>
                    </div>
                    <div>全淘宝主播数量</div>
                    <div
                      style={{
                        height: 60,
                        width: 200,
                        position: 'absolute',
                        top: 20,
                        right: 20
                      }}
                    >
                      <Decoration1 style={{ width: '100%', height: '100%' }} />
                    </div>

                    <div className="fill-h" id="mainMap"></div>
                  </div>
                </div>
                <div
                  className="xpanel-wrapper xpanel-wrapper-4"
                  style={{ display: 'flex' }}
                >
                  <div
                    style={{
                      width: '50%',
                      paddingRight: 8,
                      position: 'relative'
                    }}
                  >
                    <BorderBox8>
                      <div className="xpanel">
                        <div className="fill-h" id="mainMap2"></div>
                      </div>
                    </BorderBox8>
                  </div>
                  <div style={{ width: '50%', paddingLeft: 8 }}>
                    <BorderBox8>
                      <div className="xpanel">
                        <div className="fill-h" id="mainMap3"></div>
                      </div>
                    </BorderBox8>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 fill-h" style={{ width: '25%' }}>
                <div
                  className="xpanel-wrapper xpanel-wrapper-6"
                  style={{ position: 'relative' }}
                >
                  <div className="content_title">主播类型占比</div>
                  <BorderBox1>
                    <div className="xpanel">
                      <div className="fill-h" id="provinceMap"></div>
                    </div>
                  </BorderBox1>
                </div>
                <div
                  className="xpanel-wrapper xpanel-wrapper-6"
                  style={{ position: 'relative' }}
                >
                  <div className="content_title">重点品类排名</div>
                  <BorderBox1>
                    <div className="xpanel">
                      <div className="fill-h" id="cityMap"></div>
                    </div>
                  </BorderBox1>
                </div>
                <div
                  className="xpanel-wrapper xpanel-wrapper-4"
                  style={{ position: 'relative' }}
                >
                  <div className="content_title">Top10城市各品类占比</div>
                  <BorderBox1>
                    <div className="xpanel">
                      <div className="fill-h" id="countyMap"></div>
                    </div>
                  </BorderBox1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default App;