function submit_picture() {
        if (window.localStorage.getItem("lsa") == null) {
            var lsa = [];
            window.localStorage.setItem("lsa", JSON.stringify(lsa));
        }

        var retrievedArray = JSON.parse(window.localStorage.getItem('lsa'));

        var dict = {
            "user-name": " ",
            "picture-description": " ",
            "picture-url": " "
        };

        $('#submit-picture-btn').on('click', function () {
            $('input[type="text"]').each(function () {

                var id = $(this).attr('id');
                var value = $(this).val();
                console.log(id);
                console.log(value);
                console.log('e');
                dict[id] = value;
            })
        });

        retrievedArray.push(dict);
        window.localStorage.setItem('lsa', JSON.stringify(retrievedArray));
        console.log(retrievedArray);
}

