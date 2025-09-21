// ハンバーガーメニューのアイコン切り替え機能（jQuery）
$(document).ready(function() {
    $('.hamburger').on('click', function() {
        const $icon = $('.hamburger__icon');
        const currentSrc = $icon.attr('src');
        
        // hamburger-menu.svgが表示されている場合はclose.svgに変更
        if (currentSrc.includes('hamburger-menu.svg')) {
            $icon.attr('src', 'image/close.svg').attr('alt', 'メニューを閉じる');
        } 
        // close.svgが表示されている場合はhamburger-menu.svgに変更
        else if (currentSrc.includes('close.svg')) {
            $icon.attr('src', 'image/hamburger-menu.svg').attr('alt', 'メニュー');
        }
    });
});
