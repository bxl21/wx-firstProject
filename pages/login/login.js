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
      url: '',
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
