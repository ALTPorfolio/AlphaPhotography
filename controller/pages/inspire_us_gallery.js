function inspire_us() {
    const appContainer = $('.app-container');

    function loadHtml() {
        appContainer.load('../views/inspire-us/inspire-us.html', onLoad);

    }

    function onLoad() {

    }

    return {
        loadHtml: loadHtml
    };
}
