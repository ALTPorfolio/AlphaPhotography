$(function () {
    const headerContainer = $('.header-container');
    const appContainer = $('.app-container');

    $('.header-container').load('./views/core/header.html', function () {

        $("#request-btn").hide();
        headerContainer.on('click', '#home-btn', function () {
            appContainer.load('../views/core/home.html');
            $("#request-btn").hide();
        });

        headerContainer.on('click', '#photosessions-btn', function () {
            appContainer.load('../views/photosessions/photosessions.html');
            $("#request-btn").show();
        });

        headerContainer.on('click', '#inspire-us-btn', function () {
            appContainer.load('../views/inspire-us/inspire-us.html');
            const page = inspire_us();
            page.loadHtml();
            $("#request-btn").hide();
        });

        headerContainer.on('click', '#portraits-btn', function () {
            const page = portraitsPage();
            page.loadHtml();
            $("#request-btn").hide();
        });


        headerContainer.on('click', '#landscapes-btn', function () {
            const page = landscapesPage();
            page.loadHtml();
            $("#request-btn").hide();
        })

        headerContainer.on('click', '#contacts-btn', function () {
            appContainer.load('../views/contacts/contacts.html');
            $("#request-btn").hide();
        });
    });
    $('.app-container').load('./views/core/home.html', function () {
    });
});

