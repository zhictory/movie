//显示当前时间
function showtime() {
  $("#time").text(new Date().toLocaleTimeString());
  setInterval(function () {
    var date = new Date();
    $("#countdown").text(date.toLocaleTimeString());
  }, 1000);
}
//倒计时
function countdown() {
  var starttime = 10;
  $("#time").text(starttime--);
  var int = setInterval(function () {
    if (starttime >= 0) {
      $("#time").text(starttime--);
    }
    else {
      $("#time").text("倒计时完啦！");
      clearInterval(int);//清除计时器
    }
  }, 1000);
}

setInterval(function () {
  var now = parseInt(new Date().getTime() / 1000);
  var endTime = juConfig.endTime;
  var lastTimes = endTime - now < 0 ? 0 : endTime - now;
  var lastDays = parseInt(lastTimes / 86400);
  var lastHours = parseInt((lastTimes % 86400) / 3600);
  var lastMinutes = parseInt((lastTimes % 86400 % 3600) / 60);
  var lastSeconds = lastTimes % 86400 % 3600 % 60;

  lastHours < 10 ? lastHours = "0" + lastHours : lastHours = lastHours;
  lastMinutes < 10 ? lastMinutes = "0" + lastMinutes : lastMinutes = lastMinutes;
  lastSeconds < 10 ? lastSeconds = "0" + lastSeconds : lastSeconds = lastSeconds;

  $(".item-info-sp-list dt").html('距离结束还剩：' + lastDays + '天' + lastHours + '小时' + lastMinutes + '分' + lastSeconds + '秒');
}, 1000);