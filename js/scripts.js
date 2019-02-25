$(document).ready(() => {
    const $hamburgerMenu = $('#hamburger-menu');
    const $navigation = $('#navigation');

    $hamburgerMenu.click(toggleNavigation);
});

function toggleNavigation() {
    $('#navigation').toggleClass('_hidden');
    $('#hamburger-menu').toggleClass('_open');
}

function openNavigation() {
    $('#navigation').removeClass('_hidden');
    $('#hamburger-menu').addClass('_open');
}

function closeNavigation() {
    $('#navigation').addClass('_hidden');
    $('#hamburger-menu').removeClass('_open');
}
