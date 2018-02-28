function routerize(appContainer) {
    return {
        '#home-btn': function () {
            appContainer.load('../views/core/home.html');
            $("#request-btn").hide();
        },
        '#inspire-us-btn': function () {
            const page = inspire_us();
            appContainer.load('../views/inspire-us/inspire-us.html');
            page.loadHtml();
            $("#request-btn").hide();
        },
        '#photosessions-btn': function () {
            appContainer.load('../views/photosessions/photosessions.html');
            $("#request-btn").show()
        },
        '#portraits-btn': function () {
            const page = portraitsPage();
            page.loadHtml();
            $("#request-btn").hide();
        },
        '#landscapes-btn': function () {
            const page = landscapesPage();
            page.loadHtml();
            $("#request-btn").hide();
        },
        '#contacts-btn': function () {
            appContainer.load('../views/contacts/contacts.html');
            $("#request-btn").hide();
        }

    };
}
