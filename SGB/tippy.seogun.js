tippy('[tippy-title]', {
    content(reference) {
        const title = reference.getAttribute('tippy-title');
        reference.removeAttribute('tippy-title');
        return title;
    },
    animation: 'shift-away',
    theme: 'default',
    arrow: true,
    placement: 'top',
    arrowType: 'round',
    duration: 250,
});

tippy('.locked', {
    content: '더 이상 공유 되지 않는 앱입니다',
    theme: 'seogun',
    arrow: true,
    placement: 'top',
    arrowType: 'round',
    duration: 250,
    animation: 'shift-away',
});

tippy('.dle-content .update', {
    content: '앱이 최근에 업데이트됨',
    theme: 'seogun',
    arrow: true,
    placement: 'top',
    arrowType: 'round',
    duration: 250,
    animation: 'shift-away',
});

tippy('#click-link', {
    content: '오류 해결방법 필독',
    theme: 'seogun',
    arrow: true,
    placement: 'top',
    arrowType: 'round',
    duration: 250,
    animation: 'shift-away',
});