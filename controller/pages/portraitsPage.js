function portraitsPage() {
    const appContainer = $('.app-container');

    function loadHtml() {
        appContainer.load('../views/portfolio/portraits.html', onLoad());
    }

    function onLoad() {
        $.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=7163448156.1677ed0.2dfbf24af3444d2bb44c2103bc40a019',
            function (data) {
                let portraitsImgs = [];
                for (let i = 0; i < data.data.length; i += 1) {
                    if (data.data[i].tags == 'portraits') {
                        portraitsImgs.push(data.data[i]);
                    }
                }

                for (let j = 0; j < portraitsImgs.length; j += 1) {

                    let templateStr = `<div class="col-md-4">
                                                <div id="thumbnail-tag0" class="thumbnail">
                                                    <a href="${portraitsImgs[j].images.standard_resolution.url}">
                                                        <img src="${portraitsImgs[j].images.standard_resolution.url}">
                                                        <div class="caption">
                                                            <p>${portraitsImgs[j].caption.text}</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>`;

                    $('#portraitsID').append(templateStr);
                }
            });
    }

    return {
        loadHtml: loadHtml
    };
};
