function landscapesPage() {
    const appContainer = $('.app-container');

    function loadHtml() {
        appContainer.load('../views/portfolio/landscapes.html', onLoad());
    }

    function onLoad() {
        $.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=7163448156.1677ed0.2dfbf24af3444d2bb44c2103bc40a019',
            function (data) {
                var landscapesImgs = [];
                for (var i = 0; i < data.data.length; i += 1) {
                    if (data.data[i].tags == 'landscapes') {
                        landscapesImgs.push(data.data[i]);
                    }
                }

                for (var j = 0; j < landscapesImgs.length; j += 1) {

                    var templateStr = `<div class="col-md-4">
                                                <div id="thumbnail-tag0" class="thumbnail">
                                                    <a href="${landscapesImgs[j].images.standard_resolution.url}">
                                                        <img src="${landscapesImgs[j].images.standard_resolution.url}">
                                                        <div class="caption">
                                                            <p>Lorem ipsum...</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>`;

                    $('#landscapesID').append(templateStr);
                }
            });
    }

    return {
        loadHtml: loadHtml
    };
};
