$(function () {
    const headerContainer = $('.header-container');
    const appContainer = $('.app-container');
    const router = routerize(appContainer);

    $('.header-container').load('./views/core/header.html', function () {

        $("#request-btn").hide();

        Object.keys(router).forEach(function (key) {
            headerContainer.on('click', key, router[key]);
        });

    });
    $('.app-container').load('./views/core/home.html', function () {
    });
});
