Page({
  data:{
    mobile:'',
    password:''
  },
  bindMobile:function(e){
    this.mobile = e.detail.value,
      console.info(this.mobile)
  },
  bindPassword:function(e){
    this.password = e.detail.value
  },
  sendData: function (e) {
    wx.request({
      url: 'http://10.143.253.15:30106/api/h5/auth/smsSend',
      data: {
        mobile: this.mobile,
      },
      header: { 'Content-Type': 'application/json'},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function (res) { console.info(res.statusCode) ,
      console.info(res.data)},
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})
