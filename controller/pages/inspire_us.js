var lsa = [];

function inspire_us() {
    const appContainer = $('.app-container');

    function loadHtml() {
        appContainer.load('../views/inspire-us/inspire-us.html', onLoad());
    }

    function onLoad() {
        localStorage.setItem('lsa', JSON.stringify(lsa));
        var retrievedObject = JSON.parse(localStorage.getItem('lsa'));

        dict = {
            "user-name": " ",
            "picture-description": " ",
            "picture-url": " "
        };

        $('#submit-picture').on('click', function () {
            $('input[type="text"]').each(function () {

                var id = $(this).attr('id');
                var value = $(this).val();
                dict[id] = value;
                retrievedObject.p
                localStorage.setItem('lsa', JSON.stringify(lsa));

                //localStorage.setItem(id, value);
            })
        });
    }

    return {
        loadHtml: loadHtml
    };

}
