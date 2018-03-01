'use strict'

function submitPicture(appContainer) {

    function testImage(url, timeoutT) {
        return new Promise(function (resolve, reject) {
            let timeout = timeoutT || 5000;
            let timer, img = new Image();
            img.onerror = img.onabort = function () {
                clearTimeout(timer);
                reject('error');
            };
            img.onload = function () {
                clearTimeout(timer);
                resolve('success');
            };
            timer = setTimeout(function () {
                img.src = '//!!!!/test.jpg';
                reject('timeout');
            }, timeout);
            img.src = url;
        });
    }


    function loadHtml() {
        appContainer.load('../views/inspire-us/inspire-us.html', onLoad);
    }

    function onLoad() {

        let submitButton = $('#submit-picture');
        let pictureUrl = $('#picture-url');
        let userName = $('#user-name');
        let pictureDescription = $('#picture-description')
        let itemsArray = localStorage.getItem('items') ?
            JSON.parse(localStorage.getItem('items')) : [];

        localStorage.setItem('items', JSON.stringify(itemsArray));
        let data = JSON.parse(localStorage.getItem('items'));

        submitButton.on('click', function () {
            const result = testImage(pictureUrl.val(), 5000);
            result
                .then(function (success) {
                    let submission = {
                        name: userName.val(),
                        pictureD: pictureDescription.val(),
                        url: pictureUrl.val()

                    };

                    if (submission.pictureD === '') {
                        submission.pictureD = 'Generic piece';
                    }
                    if (submission.name === '') {
                        submission.name = 'Anonymous';
                    }

                    itemsArray.push(submission);
                    localStorage.setItem('items', JSON.stringify(itemsArray));
                    bootbox.alert('Thank you for your contribution!');
                })
                .catch(function (error) {
                    bootbox.alert('Not a valid image link');

                })
        })

        data.forEach(item => {
            let templateStr2 = `<div class="col-md-4">
                                                <div id="thumbnail-tag0" class="thumbnail">
                                                    <a href="${item.url}">
                                                        <img src="${item.url}">
                                                        <div class="caption">
                                                            <p>"${item.pictureD}"</p>
                                                            <p>by ${item.name}</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>`;
            $('#inspire-us').append(templateStr2);
        });
    }
    return {
        loadHtml: loadHtml
    };
}
