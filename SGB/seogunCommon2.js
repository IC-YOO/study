/*주석 말풍선*/
$(function () {
    tistoryFootnote.showSuper = tistoryFootnote.show;
    tistoryFootnote.show = function (anchor, entryId, noteId) {
        this.showSuper(anchor, entryId, noteId);
        var layer = document.getElementById('tistoryFootnoteLayer_' + entryId + '_' + noteId);
        layer.style.color = 'black';
        layer.style.font = '15px/1 Dotum, Sans-serif';
        layer.style.top = getOffsetTop(anchor) - layer.offsetHeight + 'px';
    };
});

/*카테고리 접기/펼치기*/
$(function () {
    $('.category_list').children('li').has('ul').addClass('cat-sub-menu'),
        $('.cat-sub-menu .link_item').append().addClass('cat-toggle'),
        $('.cat-sub-menu').each(function () {
            var c = $(this).children('.link_item'),
                d = c.attr('href');
            c.removeAttr('href'), $(this).children('ul').prepend(), c.children('span').appendTo(c.parent('.cat-sub-menu').find('.view-all'));
        }),
        $('.cat-toggle').click(function () {
            var c = $(this).parent('.cat-sub-menu');
            c.children('ul').toggle(250), c.toggleClass('expanded');
        });
});

// 댓글 버튼 두번 방지
var fewSeconds = 3;
$('button[type=submit]').click(function () {
    var btn = $(this);
    btn.prop('disabled', true);
    setTimeout(function () {
        btn.prop('disabled', false);
    }, fewSeconds * 1000);
});

//타이틀 opacity 스크립트
$(window).scroll(function () {
    var opacity = 1 - $(window).scrollTop() / 250;
    if (opacity > 1) {
        opacity = 1;
    }
    $('.ct-opacity').css('opacity', opacity);
});

//카테고리 괄호 제거
const side_category = document.getElementById('sidebar-category');
const c_cnt = side_category.getElementsByClassName('c_cnt');
for (i = 0; i < c_cnt.length; i++) {
    let pattern = /[()]/gi;
    let str = c_cnt[i].innerHTML;
    let n = str.replace(pattern, '');
    c_cnt[i].innerHTML = n;
}

//카테고리 쉼표 제거
$(function () {
    $('.body-tag').each(function () {
        var comma = $(this).html();
        $(this).html(comma.replace(/,/g, ''));
    });
});