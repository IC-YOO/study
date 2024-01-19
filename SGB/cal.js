function set_jandi() {
    // 포스팅 올린 날짜에 색 주기
    passed = document.getElementsByClassName('cal_click');
    for (i = 0; i < passed.length; i++) {
        day = parseInt(passed[i].href.split('/')[4].slice(6))
        // 연속으로 올렸는지 확인
        if (i > 0 && day == temp + 1) {
            cnt += 1;
        } else {
            cnt = 0;
        }
        temp = day
        if (cnt < 1) {
            color = "#d3ebb8"
            dark = "#26512d"
        } else if (cnt < 2) {
            color = "#b0d587"
            dark = "#425e2a"
        } else if (cnt < 3) {
            color = "#73c586"
            dark = "#557836"
        } else if (cnt < 4) {
            color = "#6bb37b"
            dark = "#73a547"
        } else if (cnt < 5) {
            color = "#5d9c6b"
            dark = "#92d359"
        } else if (cnt < 6) {
            color = "#50895f"
            dark = "#7fe95c"
        } else {
            color = "#477852"
            dark = "#40de59"
        }
        document.getElementsByClassName('cal_click')[i].style.color = color;
        document.getElementsByClassName('cal_click')[i].style.background = color;
        is_dark = document.getElementsByClassName('dark-mode')[0];
        if (is_dark) {
            document.getElementsByClassName('cal_click')[i].style.color = dark;
            document.getElementsByClassName('cal_click')[i].style.background = dark;
        }
        // 날짜가 두자릿수인 경우 모양이 깨져서 1로 고정시킴
        passed[i].innerText = 1;
    }
    // 아직 포스팅 하지 않은 날짜에도 모양을 주기 위해 <a> 삽입 후 1로 고정시킴
    notyet = document.getElementsByClassName('cal_day')
    for (i = 0; i < notyet.length; i++) {
        if (notyet[i].innerHTML.includes('</a>')) {
            continue;
        } else {
            document.getElementsByClassName('cal_day')[i].innerHTML = "<a>1</a>";
        }
    }
    // 이전 달로 가는 버튼
    document.getElementsByClassName('cal_month')[0].children[0].innerText = "";
    // 연월 확인
    mth = document.getElementsByClassName('cal_month')[0].children[1].innerText.split('/');
    if (mth[1][0] == 0) {
        mth[1] = mth[1][1];
    }
    if (parseInt(mth[1]) - 1 == 0) {
        premth = 12
        preyear = parseInt(mth[0]) - 1
    } else {
        premth = parseInt(mth[1]) - 1
        preyear = parseInt(mth[0])
    }
    if (parseInt(mth[1]) + 1 == 13) {
        postmth = 1
        postyear = parseInt(mth[0]) + 1
    } else {
        postmth = parseInt(mth[1]) + 1
        postyear = parseInt(mth[0])
    }
    // 월 표기 방식
    switch (mth[1]) {
        case '1':
            thismth = 'Jan'
            break
        case '2':
            thismth = 'Feb'
            break
        case '3':
            thismth = 'Mar'
            break
        case '4':
            thismth = 'Apr'
            break
        case '5':
            thismth = 'May'
            break
        case '6':
            thismth = 'Jun'
            break
        case '7':
            thismth = 'Jul'
            break
        case '8':
            thismth = 'Aug'
            break
        case '9':
            thismth = 'Sep'
            break
        case '10':
            thismth = 'Oct'
            break
        case '11':
            thismth = 'Nov'
            break
        case '12':
            thismth = 'Dec'
            break
    }
    document.getElementsByClassName('cal_month')[0].children[1].innerText = thismth;
    // 다음 달로 가는 버튼
    document.getElementsByClassName('cal_month')[0].children[2].innerText = "";
    // 버튼 및 월에 커서 올렸을 시 안내 문구 수정
    document.getElementsByClassName('cal_month')[0].children[0].setAttribute('title', preyear + '년 ' + premth + '월의 우주');
    document.getElementsByClassName('cal_month')[0].children[1].setAttribute('title', mth[0] + '년 ' + mth[1] + '월의 우주');
    document.getElementsByClassName('cal_month')[0].children[2].setAttribute('title', postyear + '년 ' + postmth + '월의 우주');
}