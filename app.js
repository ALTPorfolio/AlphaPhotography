'use strict'

$(function () {
    const headerContainer = $('.header-container');
    const appContainer = $('.app-container');
    const router = Routerize(appContainer);

    headerContainer.load('./views/core/header.html', function () {

        $('#request-btn').hide();

        Object.keys(router).forEach(function (key) {
            headerContainer.on('click', key, router[key]);
        });

    });
    appContainer.load('./views/core/home.html', function () {
    });
});
