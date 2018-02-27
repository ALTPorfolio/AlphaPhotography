function inspire_us() {
    const appContainer = $('.app-container');

    function testImage(url, timeoutT) {
        return new Promise(function (resolve, reject) {
            var timeout = timeoutT || 5000;
            var timer, img = new Image();
            img.onerror = img.onabort = function () {
                clearTimeout(timer);
                reject("error");
            };
            img.onload = function () {
                clearTimeout(timer);
                resolve("success");
            };
            timer = setTimeout(function () {
                // reset .src to invalid URL so it stops previous
                // loading, but doesn't trigger new load
                img.src = "//!!!!/test.jpg";
                reject("timeout");
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
        let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

        localStorage.setItem('items', JSON.stringify(itemsArray));
        let data = JSON.parse(localStorage.getItem('items'));

        submitButton.on('click', function () {
            var result = testImage(pictureUrl.val(), 5000);
            result
                .then(function (success) {
                    itemsArray.push(pictureUrl.val());
                    localStorage.setItem("items", JSON.stringify(itemsArray));
                    bootbox.alert("Thank you for your contribution!");
                })
                .catch(function (error) {
                    bootbox.alert("Not a valid image link");

                })
        })

        data.forEach(item => {
            let templateStr2 = `<div class="col-md-4">
                                                <div id="thumbnail-tag0" class="thumbnail">
                                                    <a href="${item}">
                                                        <img src="${item}">
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
