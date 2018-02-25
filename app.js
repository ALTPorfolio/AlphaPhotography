$(function () {
    const headerContainer = $('.header-container');
    const appContainer = $('.app-container');

    $('.header-container').load('./views/core/header.html', function () {

        headerContainer.on('click', '#home-btn', function () {
            appContainer.load('../views/core/home.html');
        });

        headerContainer.on('click', '#photosessions-btn', function () {
            appContainer.load('../views/photosessions/photosessions.html');
        });

        headerContainer.on('click', '#portraits-btn', function () {
            const page = portraitsPage();
            page.loadHtml();
        });

        headerContainer.on('click', '#landscapes-btn', function () {
            const page = landscapesPage();
            page.loadHtml();
        })

        headerContainer.on('click', '#contacts-btn', function () {
            appContainer.load('../views/contacts/contacts.html');
        });
    });
    $('.app-container').load('./views/core/home.html', function () {
    });
    $('.footer-container').load('./views/core/footer.html', function () {
    });
});

