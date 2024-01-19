$('.app-description').append(
    '<div class="error-first-comment"><span><a href="https://seons-dev.tistory.com/entry/MAC-%ED%81%AC%EB%9E%99-%EC%84%A4%EC%B9%98-%EC%98%A4%EB%A5%98-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95">주의사항</a>을 먼저 읽으신 뒤에, 질문 부탁드립니다.<br /><br />주의사항에 나와있는 질문은 답변드리지 않는 점 양해 부탁드립니다.</span><span class="error-caption">(다운로드 링크는 이메일로 보내드리지 않습니다. 본문을 참고해주세요.)</span></div>'
);
$('.error-first-comment').insertBefore('.move-to-comment');

// $('.tt-video.link').click(function () {
//     alert('❌ 2차 배포 금지 ❌\n유용한 자료라고 생각하시면 좋아요 부탁드립니다.👋🏻');
// });

// 마우스 hover시 video 재생 시작
var cip = $('.tt-video.link').hover(hoverVideo, hideVideo);

function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}
// 마우스 hover시 video 재생 끝

const linkBtn = document.getElementById('click-link');
linkBtn.onclick = function () {
    $('#click-link').fadeOut(100);
    setTimeout(() => {
        startDownload();
    }, 600);
};

document.querySelector('.tt-video-container.link').style.display = 'none';
$('.tt-video-container.link').prepend(
    '<div class="li-title-coffee" style="margin-bottom: 20px;text-align: center;line-height: 4;"><button id="coffeeBtn"> <span class="icon-coffee" aria-label="coffee"></span> <span>커피 한 잔 선물하기</span></button><p>커피 한 잔 후원은 저에게 아주 큰 힘이 됩니다</p></div>'
);

$('.tt-video-container.link').append(
    `<a class="traffic" href="https://seons-dev.tistory.com/entry/MAC-%ED%81%AC%EB%9E%99-%EC%84%A4%EC%B9%98-%EC%98%A4%EB%A5%98-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95#%EB%93%9C%EB%9D%BC%EC%9D%B4%EB%B8%8C_%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C_%EC%8B%A4%ED%8C%A8_%ED%95%B4%EA%B2%B0_%EB%B0%A9%EB%B2%95"><span>'다운로드 할당량 초과됨'</span> 해결 방법</a>`
);

function startDownload() {
    var countDownDate = new Date().setSeconds(new Date().getSeconds() + 11);
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById(
            'li-title'
        ).innerHTML = `다운로드 링크가 <span>${seconds}</span>초 후에 나타납니다.<br><span id="coffeeCon"><i class="fad fa-coffee-togo" style="padding-right: 5px;"></i>커피 한 잔 후원</span>은 저에게 아주 큰 힘이 됩니다<br>본문 하단 <span style="color:#ff725d !important;">좋아요 🤍</span> 꼭 부탁드립니다`;
        document.querySelector('#li-title>span').setAttribute('data-text', `${seconds}`);
        if (distance < 1) {
            clearInterval(x);
            $('.link-info-container').hide();
            $('.tt-video-container.link').fadeIn(1000);
        }
    }, 100);
}