(function () {
  // 初始化变量
  const WeekLabel = ["日", "一", "二", "三", "四", "五", "六"],
    PingDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    RunDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // 生成表格
  let table = document.getElementsByClassName('dataTable')[0];
  let tbody = document.getElementsByTagName("tbody")[0];
  // let table = document.createElement("table");
  console.log(table);
  table.setAttribute("border", "0");
  table.setAttribute("cellspacing", "0");

  let curYearEle = document.getElementById('year'),
    curMonthEle = document.getElementById('month');
  lastYearEle = document.getElementById('lastYear'),
    nextYearEle = document.getElementById('nextYear'),
    lastMonthEle = document.getElementById('lastMonth'),
    nextMonthEle = document.getElementById('nextMonth'),
    backTodayEle = document.getElementById('backToday'),
    todayEle = document.getElementById('today');
  let tr, td, temp, input, span, label;
  let mid_days = [];
  /*
  // 获取时间数组 yyyy/mm/dd
  function getDateArray(start_date, end_date, cur_date) {
    // 对日期进行处理
    let startDate = new Date(start_date), endDate = new Date(end_date);
    let s_year = startDate.getFullYear(),
      s_mon = startDate.getMonth() + 1,
      s_day = startDate.getDate(),
      e_year = endDate.getFullYear(),
      e_mon = endDate.getMonth() + 1,
      e_day = endDate.getDate();
    // 计算当月月初和月末是周几
    let start_space, end_space, mid_days = [];
    start_space = new Date(s_year + "/" + s_mon + "/" + "01").getDay();

    let curYear = s_year, curMon = s_mon;
    while (curYear < e_year || (curYear == e_year && curMon <= e_mon)) {
      if (curYear % 4 == 0 && curYear % 100 != 0 || curYear % 400 == 0) {
        mid_days.push(RunDays[curMon - 1]);
      } else {
        mid_days.push(PingDays[curMon - 1]);
      }
      curMon++;
      if (curMon > 12) {
        curYear++;
        curMon = 1;
      }
    }

    console.log('mid_day:'+ mid_days);

    end_space = 6 - new Date(e_year + "/" + e_mon + "/" + mid_days[mid_days.length - 1]).getDay();

    // 日期数组拼接
    let res = Array.from({ "length": start_space }, (v, k) => "");
    mid_days.map(function (item) {
      res = res.concat(Array.from({ "length": item }, (v, k) => k + 1));
    })
    res = res.concat(Array.from({ "length": end_space }, (v, k) => ""));
    return res;
  }
*/

  /**
   * 
   * @param {String} cur_date 
   * 获得从cur_date开始一年的日期，返回数组
   */
  function getDateArray(cur_date) {
    // if (flag_init && cur_date > prevSDate && cur_date < prevEDate) {
    //   return;
    // }
    // flag_init = 1;
    // 对日期进行处理
    // let startDate = new Date(cur_date);
    // let s_year = startDate.getFullYear(),
    //   s_mon = startDate.getMonth() + 1,
    //   s_day = startDate.getDate(),
    //   e_year = s_year + 1,
    //   e_mon = s_mon,
    //   e_day = s_day;
    // 以cur_date为中心的三个月
    let date = new Date(cur_date);
    let year = date.getFullYear(),
      mon = date.getMonth() + 1,
      day = date.getDate(),
      s_year = year,
      s_mon = mon - 1,
      s_day = day,
      e_year = year,
      e_mon = mon + 1,
      e_day = day;
    if (mon === 1) {
      s_year = year - 1;
      s_mon = 12;
    }
    if (mon === 12) {
      e_year = year + 1;
      e_mon = 1;
    }
    // 计算当月月初和月末是周几
    let start_space, end_space;
    start_space = new Date(year + "/" + mon + "/" + "01").getDay();
    mid_days = []
    let curYear = s_year, curMon = s_mon;
    while (curYear < e_year || (curYear == e_year && curMon <= e_mon)) {
      if (curYear % 4 == 0 && curYear % 100 != 0 || curYear % 400 == 0) {
        mid_days.push(RunDays[curMon - 1]);
      } else {
        mid_days.push(PingDays[curMon - 1]);
      }
      curMon++;
      if (curMon > 12) {
        curYear++;
        curMon = 1;
      }
    }

    console.log('mid_day:' + mid_days);

    // end_space = 6 - new Date(e_year + "/" + e_mon + "/" + mid_days[2]).getDay();
    end_space = 42 - mid_days[1] - start_space;
    // 日期数组拼接
    // res初始是start_space个空字符串
    // let res = Array.from({ "length": start_space }, (v, k) => "");
    // mid_days.map(function (item) {
    //   res = res.concat(Array.from({ "length": item }, (v, k) => k + 1));
    // })
    // res = res.concat(Array.from({ "length": end_space }, (v, k) => ""));
    let res = [], s_fill = start_space, e_fill = 0;
    let s = mid_days[0];
    while (s_fill > 0) {
      res.push(s - s_fill + 1);
      s_fill--;
    }
    // v is undefined
    res = res.concat(Array.from({ "length": mid_days[1] }, (v, k) => k + 1));
    while (e_fill < end_space) {
      res.push(e_fill + 1);
      e_fill++;
    }
    return res;
  }
  // 定义表格内信息
  /**
   * 
   * @param {Array} dateArray 
   */
  function init(dateArray) {
    let rowCols = getRowCols(dateArray);
    console.log(rowCols);
    let rowColFirst = rowCols[0],
      rowColPresent = rowCols[1],
      rowColLast = rowCols[2];
    let len1 = dateArray.length / 7, len2 = 7;
    for (let i = 0; i < len1; i++) {
      temp = dateArray.slice(i * 7, (i + 1) * 7);
      tr = document.createElement("tr");
      for (let j = 0; j < len2; j++) {
        td = document.createElement("td");
        input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("name", "date");
        input.setAttribute("value", temp[j]);
        input.style.display = "none";
        span = document.createElement("span");
        span.innerText = temp[j];
        if (i === rowColPresent[0] && j === rowColPresent[1]) {
          span.className = 'active';
        } else if (i === rowColFirst[0] && j < rowColFirst[1]) {
          span.classList = 'light';
        } else if ((i === rowColLast[0] && j >= rowColLast[1]) || i > rowColLast[0]) {
          span.classList = 'light';
        } else {
          span.classList ='';
        }
        label = document.createElement("label");
        label.appendChild(input);
        label.appendChild(span);
        td.appendChild(label);
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
  }
  function update(dateArray) {
    let rowCols = getRowCols(dateArray);
    console.log(rowCols);
    let rowColFirst = rowCols[0],
      rowColPresent = rowCols[1],
      rowColLast = rowCols[2];
    let trs = tbody.querySelectorAll('tr');
    let len1 = dateArray.length / 7, len2 = 7;
    // parseInt，不然比较
    let curYear = parseInt(curYearEle.innerText), curMonth = parseInt(curMonthEle.innerText);
    for (let i = 0; i < len1; i++) {
      let temp = dateArray.slice(i * 7, (i + 1) * 7);
      let tr = trs[i], tds = tr.querySelectorAll('td');
      for (let j = 0; j < len2; j++) {
        let td = tds[j];
        let input = td.querySelector('label>input');
        input.setAttribute("value", temp[j]);
        let span = td.querySelector('label>span');
        span.innerText = temp[j];
        //  todo here
        // console.log(cur_date, day, month, year)
        // console.log(temp[j], curMonth, curYear)
        if (curYear === year && curMonth === month && i === rowColPresent[0] && j === rowColPresent[1]) {
          span.className = 'active';
        } else if (i === rowColFirst[0] && j < rowColFirst[1]) {
          span.classList = 'light';
        } else if ((i === rowColLast[0] && j >= rowColLast[1]) || i > rowColLast[0]) {
          span.classList = 'light';
        } else {
          span.classList ='';
        }
      }
    }
  }

  let curDate = new Date();
  let year = curDate.getFullYear(),
    month = curDate.getMonth() + 1,
    day = curDate.getDate(),
    cur_date = year + '/' + month + '/' + day;
  // //本月第一天
  // let firstDay = new Date(`${year}-${month}-01`);
  // // 今天在日历中第几个格子
  // let markStartSpace = firstDay.getDay(),
  //   markToday = markStartSpace + curDate.getDate(),
  //   row = parseInt(markToday / 7),
  //   col = markToday % 7 - 1;
  // console.log(markToday, row, col);

  todayEle.innerText = `${year}年${month}月${day}日`
  // let sYear = curDate.getFullYear(),
  //   sMonth = curDate.getMonth() + 1,
  //   curDay = curDate.getDate();
  // let eYear = sYear + 1,
  //   eMonth = sMonth + 1;
  // let sD = sYear + '/' + sMonth + '/' + 01,
  //   eD = eYear + '/' + eMonth + '/' + 01;

  // 保存上次日期区间
  // let prevSDate = sD, prevEDate = eD;
  // let flag_init = 0;

  getRowCol = data => {
    // col处有bug，data % 7 === 0 时
    let row = parseInt(data / 7), col = data % 7;
    // 新加的，上面删除了-1
    if(col === 0){
      // 7的倍数
      row -= 1, col = 6;
    }else {
      col -= 1;
    }

    return [row, col]
  }
  // 4、5月有问题
  getRowCols = dateArray => {
    let first = dateArray.indexOf(1) + 1,
      last = dateArray.lastIndexOf(1) + 1,
      present = dateArray.indexOf(day) + 1;
      console.log(first, present, last)
    let rowColFirst = getRowCol(first),
      rowColPresent = getRowCol(present),
      rowColLast = getRowCol(last);
    return [rowColFirst, rowColPresent, rowColLast]
  }
  curYearEle.innerText = year, curMonthEle.innerText = month;
  // console.log(sD, eD);
  console.log(curDate);

  let dateArray = getDateArray(cur_date);

  //本月第一天
  // let firstDay = new Date(`${year}-${month}-01`);
  // // 今天在日历中第几个格子
  // let markStartSpace = firstDay.getDay(),
  //   markToday = markStartSpace + curDate.getDate(),
  //   row = parseInt(markToday / 7),
  //   col = markToday % 7 - 1;
  // console.log(markToday, row, col);
  // let days = mid_days[1], markEndSpace = markStartSpace + days;
  // let dateArray = getDateArray('2021-1-1','2022-1-1');

  console.log('dataArray:' + dateArray);
  init(dateArray);


  lastYearEle.addEventListener('click', function () {
    let curMonth = curMonthEle.innerText;
    let curYear = curYearEle.innerText - 1;
    curYearEle.innerText = curYear;

    let cur_date = curYear + '/' + curMonth + '/' + '01';
    let dateArray = getDateArray(cur_date);
    console.log(cur_date, dateArray);
    update(dateArray);
  })
  nextYearEle.addEventListener('click', function () {
    let curMonth = curMonthEle.innerText;
    let curYear = parseInt(curYearEle.innerText) + 1;
    curYearEle.innerText = curYear;

    let cur_date = curYear + '/' + curMonth + '/' + '01';
    let dateArray = getDateArray(cur_date);
    console.log(cur_date, dateArray);
    update(dateArray);
  })
  lastMonthEle.addEventListener('click', function () {
    let curMonth = parseInt(curMonthEle.innerText) - 1;
    let curYear = curYearEle.innerText;
    if (curMonth < 1) {
      curMonth = 12, curYear -= 1, curYearEle.innerText = curYear;
    }
    curMonthEle.innerText = curMonth;

    let cur_date = curYear + '/' + curMonth + '/' + '01';
    let dateArray = getDateArray(cur_date);
    console.log(cur_date, dateArray);
    update(dateArray);
  })
  nextMonthEle.addEventListener('click', function () {
    let curMonth = parseInt(curMonthEle.innerText) + 1;
    let curYear = parseInt(curYearEle.innerText);
    if (curMonth > 12) {
      curMonth = 1, curYear += 1, curYearEle.innerText = curYear;
    }
    curMonthEle.innerText = curMonth;

    let cur_date = curYear + '/' + curMonth + '/' + '01';
    let dateArray = getDateArray(cur_date);
    console.log(cur_date, dateArray);
    update(dateArray);
  })
  backTodayEle.addEventListener('click', function () {
    curYearEle.innerText = year, curMonthEle.innerText = month;
    let dateArray = getDateArray(cur_date);
    console.log(cur_date, dateArray);
    update(dateArray);
  })

  // tbody.addEventListener("mousemove", function (event) {
  //   let ev = event || window.event;
  //   ev.preventDefault();
  //   this.style["background-position"] = (ev.clientX - this.parentNode.offsetLeft - 46) + "px " +
  //     (ev.clientY - this.parentNode.offsetTop - 46 - 46) + "px";
  // }, true);
  // tbody.addEventListener("mouseout", function (event) {
  //   let ev = event || window.event;
  //   ev.preventDefault();
  //   this.style["background-position"] = "-92px -92px";
  // }, true)


})();