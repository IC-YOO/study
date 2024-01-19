/*==========추가 단축키==========*/
var keyFlag = true;
$('input[type!="hidden"], textarea').on('focus', function (e) {
    keyFlag = false;
});
$('input[type!="hidden"], textarea').on('blur', function (e) {
    keyFlag = true;
});
$(document).keyup(function (e) {
    if (keyFlag) {
        switch (e.key) {
            case 'ㅗ':
            case 'h':
                location.href = '/';
                break;
            case 'g':
            case 'g':
                location.href = '/guestbook';
                break;
            case 'ㅅ':
            case 't':
                location.href = '/tag';
                break;
            case 'ㅈ':
            case 'w':
                location.href = '/manage/newpost/?type=post&returnURL=%2Fmanage%2Fposts%2F';
                break;
            case 'ㄱ':
            case 'r':
                location.href = '/manage/design/skin/edit#/source/html';
                break;
        }
    }
});

/*==========티스토리 날짜 형식 변경==========*/
function modDate(a) {
    $('.' + a + ' a').addClass('abuseReport');
    $('.abuseReport').each(function (b, c) {
        $(c).parent().parent().append(c);
    });
    $('.' + a).each(function () {
        if (!$(this).is('.modDate')) {
            var l, f, n, i, g, h, e, c, d, k, j, b, m;
            l = $(this).text().trim();
            e = new Date();
            c = new Date();
            switch (l.length) {
                case 4:
                    b = l;
                    e.setFullYear(b);
                    break;
                case 5:
                    if (l.match(':')) {
                        g = l.substring(0, 2);
                        h = l.substring(3, 5);
                        e.setHours(g, h);
                    } else {
                        if (l.match('.')) {
                            n = l.substring(0, 2);
                            i = l.substring(3, 5);
                            e.setMonth(n - 1, i);
                        }
                    }
                    break;
                case 8:
                    g = l.substring(0, 2);
                    h = l.substring(3, 5);
                    e.setHours(g, h);
                    break;
                case 10:
                    f = l.substring(0, 4);
                    n = l.substring(5, 7);
                    i = l.substring(8, 10);
                    e.setFullYear(f, n - 1, i);
                    break;
                case 16:
                    f = l.substring(0, 4);
                    n = l.substring(5, 7);
                    i = l.substring(8, 10);
                    g = l.substring(11, 13);
                    h = l.substring(14, 16);
                    e.setFullYear(f, n - 1, i);
                    e.setHours(g, h);
                    break;
                default:
                    m = true;
                    break;
            }
            if (!m) {
                if (g) {
                    j = e.getFullYear() + '년 ' + (e.getMonth() + 1) + '월 ' + e.getDate() + '일 ' + e.getHours() + '시 ' + e.getMinutes() + '분';
                } else {
                    if (n) {
                        j = e.getFullYear() + '년 ' + (e.getMonth() + 1) + '월 ' + e.getDate() + '일';
                    } else {
                        j = e.getFullYear() + '년';
                    }
                }
                d = e.getTime();
                k = c.getTime();
                b = k - d;
                $(this).attr('title', j);
                b = b / 1000;
                if (g) {
                    if (b < 240) {
                        $(this).text('방금');
                    } else {
                        if (b < 3600) {
                            b = Math.round(b / 60);
                            $(this).text(b + '분 전');
                        } else {
                            if (b < 86400) {
                                b = Math.round(b / 3600);
                                $(this).text(b + '시간 전');
                            }
                        }
                    }
                } else {
                    if (b < 86400) {
                        b = j;
                        $(this).text('오늘');
                    }
                }
                if (b >= 86400) {
                    b = b - c.getHours() * 60 * 60;
                    b = Math.ceil(b / 86400);
                    if (b < 7) {
                        $(this).text(b + '일 전');
                    } else {
                        if (b < 60) {
                            b = Math.round(b / 7);
                            $(this).text(b + '주 전');
                        } else {
                            if (b < 365) {
                                b = Math.round(b / 30.5);
                                $(this).text(b + '개월 전');
                            } else {
                                if (b > 365) {
                                    b = Math.round(b / 365);
                                    $(this).text(b + '년 전');
                                }
                            }
                        }
                    }
                }
                $(this).addClass('modDate');
            }
        }
    });
}
modDate('date');
/*==========티스토리 날짜 형식 변경 끝==========*/

$(document).ready(function () {
    $('time.timeago').timeago();
});

/*==========댓글에 답글==========*/
$('.icon-reply').each(function () {
    $(this).attr('onclick', $(this).parents('.r-copy').find('.icon-reply').attr('onclick'));
});

/*==========코드블럭 언어 표시==========*/
$("pre[data-ke-type='codeblock']").each(function () {
    var showTxt = 'FOLDED',
        hideTxt = 'UNFOLDED',
        pre = this;
    var code = this.dataset.keLanguage;
    var $labelDiv = $('<div>');
    var $labelBtn = $('<span>');
    var $wrapBtn = $("<label><input type='checkbox'>");
    var $code = $(this).find('code').first();
    var codeHtml = $code.html();
    if (codeHtml.search('&lt;hide/&gt;\n') > -1 || pre.dataset.hide) {
        $code.html(codeHtml.replace('&lt;hide/&gt;\n', ''));
        $labelBtn.text(showTxt);
        $wrapBtn.hide();
        $(this).hide();
        $(this).attr('data-hide', 1);
    } else {
        $labelBtn.text(hideTxt);
        $(this).show();
    }
    $labelBtn.on('click', function () {
        var txt = $(this).text();
        $(this).text(txt == showTxt ? hideTxt : showTxt);
        if (txt == showTxt) {
            $wrapBtn.show();
            $(pre).removeAttr('data-hide');
        } else {
            $wrapBtn.hide();
        }
        $(pre).toggle();
    });
    $labelDiv.on('click', function () {
        $labelBtn.triggerHandler('click');
    });
    $labelDiv.text(code).prop('title', code + ' - ' + showTxt + '/' + hideTxt);
    var $codeLabel = $('<div class="codeLabel">').append($labelDiv).append($labelBtn).append($wrapBtn);
    $(this).before($codeLabel);
});
/*==========코드블럭 언어 표시 끝==========*/

/*==========마우스 커서==========*/
//마우스 커서
var rjs_cursor = document.getElementById('rjs_cursor'); //Getting the cursor
var body = document.querySelector('body'); //Get the body element

//Functions for showing and hiding the cursor
//They are referenced the
function rjs_show_cursor(e) {
    //Function to show/hide the cursor
    if (rjs_cursor.classList.contains('rjs_cursor_hidden')) {
        rjs_cursor.classList.remove('rjs_cursor_hidden');
    }
    rjs_cursor.classList.add('rjs_cursor_visible');
}

function rjs_hide_cursor(e) {
    if (rjs_cursor.classList.contains('rjs_cursor_visible')) {
        rjs_cursor.classList.remove('rjs_cursor_visible');
    }
    rjs_cursor.classList.add('rjs_cursor_hidden');
}

function rjs_mousemove(e) {
    //Function to correctly position the cursor
    rjs_show_cursor(); //Toggle show/hide

    var rjs_cursor_width = rjs_cursor.offsetWidth * 0.5;
    var rjs_cursor_height = rjs_cursor.offsetHeight * 0.5;

    var rjs_cursor_x = e.clientX - rjs_cursor_width; //x-coordinate
    var rjs_cursor_y = e.clientY - rjs_cursor_height; //y-coordinate
    var rjs_cursor_pos = `translate(${rjs_cursor_x}px, ${rjs_cursor_y}px)`;
    rjs_cursor.style.transform = rjs_cursor_pos;
}

//Eventlisteners
window.addEventListener('mousemove', rjs_mousemove); //Attach an event listener
body.addEventListener('mouseleave', rjs_hide_cursor);

//Hover behaviour
function rjs_hover_cursor(e) {
    rjs_cursor.classList.add('rjs_cursor_hover');
}
function rjs_unhover_cursor(e) {
    rjs_cursor.classList.remove('rjs_cursor_hover');
}

document.querySelectorAll('a').forEach(item => {
    item.addEventListener('mouseover', rjs_hover_cursor);
    item.addEventListener('mouseleave', rjs_unhover_cursor);
});

document.querySelectorAll('input').forEach(item => {
    //Input tags
    item.addEventListener('mouseover', rjs_hover_cursor);
    item.addEventListener('mouseleave', rjs_unhover_cursor);
});

document.querySelectorAll('button').forEach(item => {
    //Input tags
    item.addEventListener('mouseover', rjs_hover_cursor);
    item.addEventListener('mouseleave', rjs_unhover_cursor);
});

document.querySelectorAll('.mycustomclass').forEach(item => {
    //A custom class
    item.addEventListener('mouseover', rjs_hover_cursor);
    item.addEventListener('mouseleave', rjs_unhover_cursor);
});
/*==========마우스 커서 끝==========*/

/*==========구독 박스==========*/
var closetime = 26;
function Start() {
    document.getElementById('notification-container').classList.add('show');
    if (closetime) {
        timer = setTimeout('Stop()', closetime * 1000);
    }
}

function Stop() {
    document.getElementById('notification-container').classList.remove('show');
    clearTimeout(timer);
}

function doPopup() {
    delay = 12; // 지연시간
    timer = setTimeout('Start()', delay * 1000);
}
doPopup();

$('#subButton').on('click', function () {
    //showToast("구독 감사합니다. ✨", "bottom")
});
/*==========구독 박스 끝==========*/

/*==========플로팅 프로그래스바==========*/
(function ($) {
    'use strict';

    $(document).ready(function () {
        'use strict';

        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength) / height;
            progressPath.style.strokeDashoffset = progress;
        };
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            }
        });
        jQuery('.progress-wrap').on('click', function (event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        });
    });
})(jQuery);
/*==========플로팅 프로그래스바 끝==========*/

/*==========플로팅 버튼==========*/
var offset = 50;
var duration = 550;
jQuery(window).on('scroll', function () {
    if (jQuery(this).scrollTop() > offset) {
        jQuery('.f-btn-up').addClass('active-progress');
    } else {
        jQuery('.f-btn-up').removeClass('active-progress');
    }
});

/*==========textarea 줄바꿈==========*/
$(document).ready(function () {
    $('.comment-form').on('keyup', 'textarea', function (e) {
        $(this).css('height', 'auto');
        $(this).height(this.scrollHeight);
    });
    $('.comment-form').find('textarea').keyup();
});
/*==========textarea 줄바꿈 끝==========*/

/*==========기본 광고 삭제==========*/
function removeDefaultAds() {
    var defaultAds = $('div[itemprop="articleBody"] .revenue_unit_wrap .revenue_unit_item.adsense.responsive').parent();
    if (defaultAds.length > 0) {
        defaultAds.remove();
    }
}
$(document).ready(function () {
    removeDefaultAds();
});

/*==========코드블럭 복사==========*/
$(document).ready(function () {
    $('pre[id^="code"]').each(function (index, e) {
        let button = document.createElement('button');
        button.className = 'copy-button';
        button.style.cursor = 'pointer';
        button.setAttribute('data-clipboard-text', e.innerText);
        button.setAttribute('mytooltip', '코드 복사');
        button.addEventListener('mouseleave', function (event) {
            event.currentTarget.setAttribute('class', 'copy-button');
        });
        e.appendChild(button);
        $(
            '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="copy" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="code-copy-svg fa-copy fa-lg" style="width: 25px;"><path fill="currentColor" d="M384 96L384 0h-112c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48H464c26.51 0 48-21.49 48-48V128h-95.1C398.4 128 384 113.6 384 96zM416 0v96h96L416 0zM192 352V128h-144c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h192c26.51 0 48-21.49 48-48L288 416h-32C220.7 416 192 387.3 192 352z" class=""></path></svg>'
        ).appendTo(button);
    });
    var clipboard = new ClipboardJS('.copy-button');
    clipboard.on('success', function (e) {
        e.clearSelection();
        showToast('코드 복사 완료 ✨');
    });
});
/*==========코드블럭 복사==========*/

/*==========번역 팝업==========*/
$(document).ready(function () {
    $('#f-lang-box').click(function (event) {
        event.stopPropagation();
        $('#f-lang-box').toggleClass('fb-on');
    });
    $('#f-lang-box').on('click', function (event) {
        event.stopPropagation();
    });
});
$(document).on('click', function () {
    $('#f-lang-box').removeClass('fb-on');
});
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $('#f-lang-box').removeClass('fb-on');
    }
});

$(document).ready(function () {
    $('#lang-box').click(function (event) {
        event.stopPropagation();
        $('#lang-box').toggleClass('footer-on');
    });
    $('#lang-box').on('click', function (event) {
        event.stopPropagation();
    });
});
$(document).on('click', function () {
    $('#lang-box').removeClass('footer-on');
});
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $('#lang-box').removeClass('footer-on');
    }
});

/*==========검색창 팝업==========*/
$(document).ready(function () {
    var target = $('#search-pop');
    $(document).on('click', '.ss-search-btn', function (e) {
        target
            .fadeIn(300, function () {
                $('#sp-placeholder').focus();
            })
            .addClass('reveal');
        $('body').addClass('has-search');
    });

    $(document).mouseup(function (e) {
        if (target.has(e.target).length == 0) {
            target
                .fadeOut(300, function () {
                    $('body').removeClass('has-search');
                })
                .removeClass('reveal');
        }
    });

    //clear버튼 클릭시 지우기 버튼 없애기
    $('.clear_btn').click(function () {
        $('button.clear_btn').fadeOut(100, function () {
            $('#sp-placeholder').focus();
        });
        $('.separator').fadeOut();
        $('.sb-i-btn').removeClass('active');
    });

    //input에 값이 없다면 지우기 버튼 없애기
    $('#sp-placeholder').keyup(function () {
        if ($(this).val()) {
            $('button.clear_btn').fadeIn();
            $('.separator').fadeIn();
            $('.sb-i-btn').addClass('active');
        } else {
            $('button.clear_btn').fadeOut();
            $('.separator').fadeOut();
            $('.sb-i-btn').removeClass('active');
        }
    });
});

/*==========커피 팝업==========*/
$(document).ready(function () {
    var target = $('#coffeePop');
    $(document).on('click', '#coffeeBtn', function (e) {
        target.fadeIn(100).addClass('reveal');
        $('body').addClass('has-coffee');
    });

    $(document).mouseup(function (e) {
        if (target.has(e.target).length == 0) {
            target.fadeOut(100).removeClass('reveal');
            $('body').removeClass('has-coffee');
        }
    });
});

$('#coffeePop .closeBtn').click(function () {
    $(this).closest('.closeBtn_C').removeClass('reveal').fadeOut(200);
    $('body').removeClass('has-coffee');
});
$('#search-pop .closeBtn').click(function () {
    $(this).closest('.closeBtn_C').removeClass('reveal').fadeOut(200);
    $('body').removeClass('has-search');
});