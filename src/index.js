{
  /**
   * 查找指定位置的健值
   * @param {Object} obj 查找对象
   * @param {Number} n 索引
   */
  function getSpecifiedObjectValue(obj, n) {
    // 无需判断 obj 的类型，因为对象都能作为 Object.keys 的参数
    if (!obj) {
      return;
    }
    // 无需判断 n 的类型，因为非数值都会返回 undefined
    if (!n) {
      n = 1;
    }
    return obj[Object.keys(obj)[n-1]];
  }
}
{
  /**
   * 一个错误处理函数和测试案例的代码
   */
  global.onerror = handleError;
  let msg = "";
  function handleError(desc, page, line) {
    msg = "An error has occurred.";
    msg += "Line: " + line;
    msg += "Description: " + desc;
    console.log(msg);
  }
}
{
  /**
   * 浏览器能力检测
   * 在浏览器环境下测试任何对象的某个特性是否存在
   * unknown 为 IE 特有
   */
  function isHostMethod(object, property) {
    const t = typeof object[property];
    return t === 'function' || !!(t === 'object' && object[property]) || t === 'unknown';
  }
}
{
  /**
   * console.log
   */
  function log() {
    console && console.log(...arguments);
  }
}
{
  /**
   * 获取某个范围的随机数
   */
  function getRandom(lowerValue, upperValue) {
    return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
  }
}
{
  /**
   * 数组去重
   */
  function deRepeat(array) {
    return Array.from(new Set(array));
  }
}
{
  /**
   * 递归实现 i 加到 n（i<=n）
   */
  function add(sum, i, n) {
    sum += i;
    if (i === n) {
      console.log(sum);
    } else {
      add(sum, ++i, n);
    }
  }
  /**
   * 等差数列实现 i 加到 n（i<=n）
   */
  function add(i, n) {
    return (n + i) * (n - i + 1) / 2;
  }
}
{
  /**
   * 大数阶乘
   * 将一个数字的每一位（个位、十位、百位、千位……）拆分出来，构成一个数组。
   * 每次计算时，针对每一位进行数学运算，并遵循逢十进一的原则，修改数组中每一个数组元素的内容。
   * 在完成所有运算之后，得到的数组是逆序的，要先 reverse 再 join，将每一位连接起来，组成“字符串”输出大数
   * 
   * https://www.cnblogs.com/h5course/p/7566812.html
   */
  function bigNum(maxNum) {

    let result = [1];

    for (let num = 2; num <= maxNum; num++) {
      for (let i = 0, plus = 0; i < result.length || plus != 0; i++) {
        const count = (i < result.length) ? (num * result[i] + plus) : plus; // 如 4*6=24，count 就是 24 再加上 plus
        result[i] = count % 10; // 如 4*6=24，result[i] 就是 4
        plus = (count - result[i]) / 10; // 如 4*6=24，plus 就是 2
      };
    };

    return result.reverse().join('');

  }
}
{
  /**
   * 单词折行算法（canvas）
   * Divide an entire phrase in an array of phrases, all with the max pixel length given.
   * The words are initially separated by the space char.
   * @param {*} ctx 
   * @param {*} phrase 
   * @param {*} maxPxLength 
   * @param {*} textStyle 
   */
  function getLines(ctx, phrase, maxPxLength, textStyle) {

    const wordAll = phrase.split(" ");
    let lastPhrase = wordAll[0];
    let phraseArray = [];
    let measure = 0;

    ctx.font = textStyle;

    for (let i = 1; i < wordAll.length; i++) {

      let word = wordAll[i];

      measure = ctx.measureText(lastPhrase + word).width;

      if (measure < maxPxLength) {
        lastPhrase += (" " + word);
      } else {
        phraseArray.push(lastPhrase);
        lastPhrase = word;
      }
      if (i === wordAll.length - 1) {
        phraseArray.push(lastPhrase);
        break;
      }
    }

    return phraseArray;
  }
}
{
  /**
   * 显示当前时间
   */
  function showtime() {
    console.log(new Date().toLocaleTimeString());
    setInterval(function () {
      const date = new Date();
      console.log(new Date().toLocaleTimeString());
    }, 1000);
  }
}
{
  /**
   * 计秒倒计时
   */
  function countdown() {
    let starttime = 10;
    console.log(starttime--);
    let timer = setInterval(function () {
      if (starttime >= 0) {
        console.log(starttime--);
      } else {
        console.log("倒计时完啦！");
        clearInterval(timer); // 清除计时器
      }
    }, 1000);
  }
}
{
  /**
   * 日期倒计时
   */
  function countdown() {

    setInterval(function () {

      const now = parseInt(new Date().getTime() / 1000);
      const endTime = 1861891199; // 2028-12-31 23:59:59
      const endTimeLocale = new Date(endTime * 1000).toLocaleString();
      // 各持续时间字段
      let duringTimes = endTime - now < 0 ? 0 : endTime - now;
      let duringDays = parseInt(duringTimes / 86400);
      let duringHours = parseInt((duringTimes % 86400) / 3600);
      let duringMinutes = parseInt((duringTimes % 86400 % 3600) / 60);
      let duringSeconds = duringTimes % 86400 % 3600 % 60;
      // 格式化时间字段
      duringHours < 10 ? duringHours = "0" + duringHours : duringHours = duringHours;
      duringMinutes < 10 ? duringMinutes = "0" + duringMinutes : duringMinutes = duringMinutes;
      duringSeconds < 10 ? duringSeconds = "0" + duringSeconds : duringSeconds = duringSeconds;

      console.log('距离 ' + endTimeLocale + ' 还剩：' + duringDays + '天' + duringHours + '小时' + duringMinutes + '分' + duringSeconds + '秒');

    }, 1000);

  }
}
{
  /**
   * 关于 createXHR()：
   * activeXString 是自定义的，activeXString 一般只会有 2 个类型的值（null 和 versions 数组中的某一个）
   * 
   * 这个函数的作用就是创建一个异步请求的对象：
   * 1. 判断是否存在 XHR，如果有就直接返回他创造的对象。
   * 2. 判断是否存在 ActiveXObject，如果存在则创建他的对象，
   * 但这个对象需要一个传入参数（new ActiveXObect(versions[i])），需要 versions 数组中的某个项，数组的3个项分别对应3个版本，从最高版本开始创建，
   * 如果创建失败，就被 catch 抓住不处理，继续循环，直到循环创建成功为止，然后给自己添加一个属性叫 activeXString。
   */
  function createXHR() {
    if (typeof XMLHttpRequest != 'undefined') {
      return new XMLHttpRequest(); // 适用于IE7+及其它主流浏览器（原生的 XHR 对象）
    } else if (typeof ActiveXObject != 'undefined') {
      if (typeof arguments.callee.activeXString != 'string') {
        var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"], i, len;
        for (i = 0, len = versions.length; i < len; i++) {
          try {
            new ActiveXObject(versions[i]);
            arguments.callee.activeXString = versions[i];
            break;
          } catch (ex) {
            //跳过
          }
        }
      }
      return new ActiveXObject(arguments.callee.activeXString); // 适用于IE7之前的版本（MSXML库中的 XHR 对象）
    } else {
      throw new Error("No XHR object available"); // 都不适用
    }
  }

  // 使用 createXHR
  // var xhr = createXHR();
  // xhr.onreadystatechange = function () {
  //   if (xhr.readyState === 4) {
  //     if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
  //       console.log(xhr.responseText);
  //     } else {
  //       console.log("Request was unsuccessful" + xhr.status);
  //     }
  //   }
  // };
  // xhr.open("get", "example.txt", true);
  // xhr.send(null);

  // 当需要设置头部信息的时候  
  // xhr.open("post", "example.txt", true);
  // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  // var form = document.getElementById("user-info");
  // xhr.send(serialize(form));
}
{
  /**
   * 活动配置秒杀时，会将秒杀商品的数据输出在页面上，由前端自行获取处理。
   * 现在想在一堆数据中取出每次秒杀的开始时间，并格式化输出。
   * @param {String} str 
   */
  function matchTime(str) {

    const reg = /"type":"1","start_time":"(\d+)"/g;
    const sub_reg = /"start_time":"(\d+)"/;
    const arr = str.match(reg);
    const arr_format = arr.map((item) => {
      return sub_reg.exec(item)[1] * 1000;
    });

    return arr_format;

  }

  // const str = `var acData={"activity_mddh_status":"0","activity_anchor_info":false,"list":[]};var commonData={"piAlias":"ac201506","domain":"sale.kinhom.com","now":1470015036,"check":0,"continued":0,"start_time":"1469980800","end_time":"1472659199","login":1,"miaosha":[{"pro_id":"2153","type":"1","start_time":"1470016800","end_time":"1470067199","useable":"3","sku":[{"sku_id":"7807","pro_id":"2153","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"2209.00"},{"sku_id":"57743","pro_id":"2153","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"6596.00"}]},{"pro_id":"2156","type":"1","start_time":"1470103200","end_time":"1470153599","useable":"3","sku":[{"sku_id":"7807","pro_id":"2156","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"2209.00"},{"sku_id":"57743","pro_id":"2156","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"6596.00"}]},{"pro_id":"2159","type":"1","start_time":"1470189600","end_time":"1470239999","useable":"3","sku":[{"sku_id":"7807","pro_id":"2159","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"2209.00"},{"sku_id":"57743","pro_id":"2159","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"6596.00"}]},{"pro_id":"2162","type":"1","start_time":"1470276000","end_time":"1470326399","useable":"3","sku":[{"sku_id":"7807","pro_id":"2162","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"2209.00"},{"sku_id":"57743","pro_id":"2162","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"6596.00"}]},{"pro_id":"2165","type":"1","start_time":"1470362400","end_time":"1470412799","useable":"3","sku":[{"sku_id":"7807","pro_id":"2165","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"2209.00"},{"sku_id":"57743","pro_id":"2165","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"6596.00"}]},{"pro_id":"2168","type":"1","start_time":"1470448800","end_time":"1470499199","useable":"3","sku":[{"sku_id":"7807","pro_id":"2168","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"2209.00"},{"sku_id":"57743","pro_id":"2168","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"6596.00"}]},{"pro_id":"2171","type":"1","start_time":"1470535200","end_time":"1470585599","useable":"3","sku":[{"sku_id":"7807","pro_id":"2171","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"2209.00"},{"sku_id":"57743","pro_id":"2171","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"6596.00"}]},{"pro_id":"2174","type":"1","start_time":"1470621600","end_time":"1470671999","useable":"3","sku":[{"sku_id":"7807","pro_id":"2174","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"2209.00"},{"sku_id":"57743","pro_id":"2174","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"6596.00"}]},{"pro_id":"2177","type":"1","start_time":"1470708000","end_time":"1470758399","useable":"3","sku":[{"sku_id":"7807","pro_id":"2177","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"2209.00"},{"sku_id":"57743","pro_id":"2177","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"6596.00"}]},{"pro_id":"2180","type":"1","start_time":"1470794400","end_time":"1470844799","useable":"3","sku":[{"sku_id":"7807","pro_id":"2180","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"2209.00"},{"sku_id":"57743","pro_id":"2180","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"6596.00"}]},{"pro_id":"2183","type":"1","start_time":"1470880800","end_time":"1470931199","useable":"3","sku":[{"sku_id":"7807","pro_id":"2183","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"2209.00"},{"sku_id":"57743","pro_id":"2183","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"6596.00"}]},{"pro_id":"2186","type":"1","start_time":"1470967200","end_time":"1471017599","useable":"3","sku":[{"sku_id":"7807","pro_id":"2186","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"2209.00"},{"sku_id":"57743","pro_id":"2186","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"6596.00"}]},{"pro_id":"2189","type":"1","start_time":"1471053600","end_time":"1471103999","useable":"3","sku":[{"sku_id":"7807","pro_id":"2189","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"2209.00"},{"sku_id":"57743","pro_id":"2189","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"6596.00"}]},{"pro_id":"2192","type":"1","start_time":"1471140000","end_time":"1471190399","useable":"3","sku":[{"sku_id":"7807","pro_id":"2192","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"2209.00"},{"sku_id":"57743","pro_id":"2192","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"6596.00"}]},{"pro_id":"2195","type":"1","start_time":"1471226400","end_time":"1471276799","useable":"3","sku":[{"sku_id":"7807","pro_id":"2195","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"2209.00"},{"sku_id":"57743","pro_id":"2195","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"6596.00"}]},{"pro_id":"2198","type":"1","start_time":"1471312800","end_time":"1471363199","useable":"3","sku":[{"sku_id":"7807","pro_id":"2198","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"2209.00"},{"sku_id":"57743","pro_id":"2198","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"6596.00"}]},{"pro_id":"2201","type":"1","start_time":"1471399200","end_time":"1471449599","useable":"3","sku":[{"sku_id":"7807","pro_id":"2201","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"2209.00"},{"sku_id":"57743","pro_id":"2201","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"6596.00"}]},{"pro_id":"2204","type":"1","start_time":"1471485600","end_time":"1471535999","useable":"3","sku":[{"sku_id":"7807","pro_id":"2204","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"2209.00"},{"sku_id":"57743","pro_id":"2204","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"6596.00"}]},{"pro_id":"2207","type":"1","start_time":"1471572000","end_time":"1471622399","useable":"3","sku":[{"sku_id":"7807","pro_id":"2207","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"2209.00"},{"sku_id":"57743","pro_id":"2207","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"6596.00"}]},{"pro_id":"2210","type":"1","start_time":"1471658400","end_time":"1471708799","useable":"3","sku":[{"sku_id":"7807","pro_id":"2210","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"2209.00"},{"sku_id":"57743","pro_id":"2210","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"6596.00"}]},{"pro_id":"2213","type":"1","start_time":"1471744800","end_time":"1471795199","useable":"3","sku":[{"sku_id":"7807","pro_id":"2213","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"2209.00"},{"sku_id":"57743","pro_id":"2213","pro_price":"1.00","pro_num":"10","sales_volume":"0","sku_des":"0","type":"1","sort":"0","v_sale":"10","title":"","store_price":"6596.00"}]}]};var activityBg="http://img1.jjcdn.com//g1/M00/04/5C/CvoBNFed0ZqAC8amAAwARsH8OoQ155.jpg";`;

  // matchTime(str);
}
{
  /**
   * 增加指定 URL 参数
   * @param {String} url 
   * @param {String} name 
   * @param {String} value 
   */
  function addUrlParam(url, name, value) {
    if (typeof url === "" && (typeof value === "string" || typeof value === "number")) {
      url += (url.indexOf("?") == -1 ? "?" : "&"); // 判断原来的URL后面是否已有参数
      url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
      return url;
    }
  }
}
{
  /**
   * 查询指定 URL 参数
   * @param {String} url 链接
   * @param {String} name 参数key
   */
  function getUrlParam(url, name) {
    if (typeof name === "string" || typeof name === "number") {
      const value = url.match(new RegExp(`[\?\&]${name}=([^\&]*)(\&?)`, "i"));
      return value ? decodeURIComponent(value[1]) : "";
    }
  }
}
{
  /**
   * 查询所有 URL 参数
   */
  function getUrlParamAll() {
    return location.search.slice(1).split('&').map(item => decodeURIComponent(item));
  }
}
{
  /**
   * 使用 rem
   * rem 指相对于根元素字体大小的倍数。
   * rem 公式：
   * 如果想要 1rem 相当于 100px，就以 100px 为基准得到公式 fontSize/clientWidth = 100/uiWidth，这个 clientWidth 通过 js 获取，再计算出 fontSize。
   * 再由公式 1rem/100px = xrem/fontSize 按比例使用 rem。
   */
  function setRem () {
    const html = document.getElementsByTagName('html')[0];
    const uiWidth = 750;
    const maxSize = 100;
    const clientWidth = document.documentElement.clientWidth;
    if (clientWidth > uiWidth) {
      clientWidth = uiWidth;
    }
    html.style.fontSize = clientWidth * (maxSize / uiWidth) + 'px';
  }
}

module.exports = { getRandom, getUrlParam };