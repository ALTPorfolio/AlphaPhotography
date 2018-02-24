function portraitsPage() {
    const appContainer = $('.app-container');

    function loadHtml() {
        appContainer.load('../views/portfolio/portraits.html', onLoad);
    }

    function onLoad() {

    }

    return {
        loadHtml: loadHtml
    };
};
