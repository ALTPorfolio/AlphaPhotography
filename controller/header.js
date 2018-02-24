$('.header-container').on('click', '#landscape-btn', function () {
    $('.app-container')
        .load('../views/landscape.html', function () {
            $.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=7163448156.1677ed0.2dfbf24af3444d2bb44c2103bc40a019',
                function (data) {
                    // console.log(data.data[0].images.low_resolution.url);

                    for (var i = 0; i < 3; i++) {
                        var imgTag = $('#my-img-tag' + i)
                            .attr('src', data.data[i].images.low_resolution.url)
                            .css({
                                width: '300px',
                                height: '300px'
                            });
                    }
                });
        });
});

