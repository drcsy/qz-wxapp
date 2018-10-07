// pages/ec/ec_test.js
import * as echarts from '../../ec-canvas/echarts';
let chart = null;

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '美梦质量'
    },
    tooltip: {},
    legend: {
      data: ['心率', '呼吸率', '呼吸时长']
    },
    xAxis: {
      data: ["0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00"]
    },
    yAxis: {},
    series: [{
        name: '心率',
        color: 'red',
        type: 'line',
        data: [5, 3, 2, 4, 6, 5, 2, 3, 1]
      },
      {
        name: '呼吸率',
        color: 'blue',
        type: 'line',
        data: [2, 1, 4, 3, 2, 7, 2, 3, 2]
      },
      {
        name: '呼吸时长',
        color: 'green',
        type: 'line',
        data: [3, 1, 3, 3, 4, 5, 6, 3, 3]
      }


    ]
  }

  chart.setOption(option);
  return chart;
};


Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})