'use strict'

function landscapesPage(appContainer) {

    function loadHtml() {
        appContainer.load('../views/portfolio/landscapes.html', onLoad);
    }

    function onLoad() {
        $.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=7163448156.1677ed0.2dfbf24af3444d2bb44c2103bc40a019',
            function (data) {
                let landscapesImgs = [];
                for (var i = 0; i < data.data.length; i += 1) {
                    if (data.data[i].tags.toString() == 'landscapes') {
                        landscapesImgs.push(data.data[i]);
                    }
                }

                for (var j = 0; j < landscapesImgs.length; j += 1) {

                    let templateStr = `<div class="col-md-4">
                                                <div id="thumbnail-tag0" class="thumbnail">
                                                    <a href="${landscapesImgs[j].images.standard_resolution.url}">
                                                        <img src="${landscapesImgs[j].images.standard_resolution.url}">
                                                        <div class="caption">
                                                            <p>${landscapesImgs[j].caption.text}</p>
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
