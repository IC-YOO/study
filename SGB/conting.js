
//카운트
let isVisibleFst = false;
let isVisibleScd = false;
window.addEventListener('scroll', function () {
    if (checkVisible($('#cbi-counting-start')) && !isVisibleFst) {
        countAll();
        isVisibleFst = true;
    }
});
function checkVisible(elm, eval) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(),
        scrolltop = $(window).scrollTop(),
        y = $(elm).offset().top,
        elementHeight = $(elm).height();
    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}
function countAll() {

    var easingFn = function easingFn(t, b, c, d) {
        var ts = (t /= d) * t;
        var tc = ts * t;
        return b + c * (tc + -3 * ts + 3 * t);
    };
    var options1 = {
        duration: 4.5,
        easingFn: easingFn
    };
    var options2 = {
        duration: 4.5,
        easingFn: easingFn,
        startVal: 150000
    };
    var options3 = {
        duration: 4.5,
        easingFn: easingFn
    };
    var options4 = {
        duration: 4.5,
        easingFn: easingFn
    };
    var _today = document.querySelector('#tdCnt').innerText.replace(/,/g, "");
    var _total = document.querySelector('#totCnt').innerText.replace(/,/g, "");
    var _blog = document.querySelector('#blogDdayCnt').innerText.replace(/,/g, "");
    var _totalSub = document.querySelector('#totalSub').innerText.replace(/,/g, "");
    var tdCnt = new countUp.CountUp("tdCnt", _today, options1);
    var totCnt = new countUp.CountUp("totCnt", _total, options2);
    var blogDdayCnt = new countUp.CountUp("blogDdayCnt", _blog, options3);
    var totalSub = new countUp.CountUp("totalSub", _totalSub, options4);
    tdCnt.start();
    totCnt.start();
    blogDdayCnt.start();
    totalSub.start();
}