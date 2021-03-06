var app = getApp();
var util = require("../../utils/util.js");
Page({
  data : {
    userInfo: null,
    isEmpty: false,
    errMsg: ''
  },
  onLoad: function(e){
    var login = require("../../modules/login/index.js");
    if(!login.isLogin()){
      login.setConfig({loginCb:{
        success: function (res) {
          this.setData({
            userInfo: res
          });
        }
      }})
      login.doLogin();
      var msg = '本页面功能需要你授权允许使用你微信个人资料才能访问哦';
      this.setData({
        isEmpty: true,
        errMsg: msg
      });
      return;
    }else{
      var userInfo = app.globalData.userInfo = login.getUserInfo();
      this.setData({
        userInfo: userInfo
      });
    }
  },
  setPwd: function (e) {
    wx.navigateTo({
      url: '/pages/my/setpwd'
    })
  }
});