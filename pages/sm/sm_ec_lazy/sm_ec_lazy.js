// pages/sm/sm_ec_lazy/sm_ec_lazy.js
import * as echarts from '../../../ec-canvas/echarts';
let chart = null;

//获取应用实例
const app = getApp();

Page({
  data: {
    isNewEcOpt: false,
    ec: {
      lazyLoad: true
    },
    opt: {
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
  },

  // 点击按钮后初始化图表
  ecInit: function() {
    this.ecComponent.init((canvas, width, height) => {
      // 获取组件的 canvas、width、height 后的回调函数
      // 在这里初始化图表
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      // setOption(chart); /*该方法要放在page外面*/
      // this.setOption(chart); /*该方法是page的属性*/
      chart.setOption(this.data.opt); /*直接加载page属性data内的opt数据*/

      // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
      this.chart = chart;

      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return chart;
    });
  },
  getSmDataByUserId: function() {
    // console.log(this.data.isNewEcOpt);
    this.setData({
      'isNewEcOpt': false
    });
    // console.log(this.data.isNewEcOpt);
    wx.request({
      url: app.globalData.apiUrl + '/api/user/sm_data/111111',
      success: (res) => {
        // console.log(res);
        let smDataArrayFromBackEnd = res.data.data;
        let xAxis = [];
        let seriesData = [];
        // console.log(smDataArrayFromBackEnd);
        smDataArrayFromBackEnd.forEach(function(sd, index) {
          // console.log(sd, index);
          xAxis[index] = sd.smTime;
          seriesData[index] = sd.smData
        });
        // console.log(xAxis,seriesData);
        this.data.opt.xAxis.data = xAxis;
        this.data.opt.series[0].data = seriesData;
        // console.log(this.data.isNewEcOpt);
        this.setData({
          'isNewEcOpt': true
        });
        // console.log(this.data.isNewEcOpt);

        // console.log(this.data.opt);
      },
      fail: (res) => {
        console.log(res);
      },
    })

  },
  newDataAndEc: function() {
    this.getSmDataByUserId();
    let that = this;
    let id = setInterval(
      function() {
        // console.log('正在获取最新数据...');
        if (that.data.isNewEcOpt == true) {
          clearInterval(id);
          // console.log('已获取到最新数据...');
          that.ecInit();
        } else {
          // console.log('等待...');
        };
      }, 50
    );
    // console.log('刷新数据和图表任务执行完毕。');
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.getSmDataByUserId();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // 获取组件
    this.ecComponent = this.selectComponent('#sm-line');
    this.ecInit();
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