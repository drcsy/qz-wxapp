// pages/sm/sm_ec.js
import * as echarts from '../../ec-canvas/echarts';
let chart = null;

//获取应用实例
const app = getApp();

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '心率'
    },
    tooltip: {},
    legend: {
      data: ['心率', ]
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
    }, ]
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
  getSmDataByUserId: function() {
    wx.request({
      url: app.globalData.apiUrl + '/api/user/sm_data/111111',
      success: (res) => {
        console.log(res);
      },
      fail: (res) => {
        console.log(res);
      },
    })

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