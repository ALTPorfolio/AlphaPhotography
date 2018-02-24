$('.header-container').on('click', '#landscapes-btn', function () {
    $('.app-container')
        .load('../views/portfolio/landscapes.html', function () {
            $.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=7163448156.1677ed0.2dfbf24af3444d2bb44c2103bc40a019',
                function (data) {

                    //$('#thumbnail-tag0').each(function () {
                    //    console.log(this);
                    //    $(this).find('a').each(function () {
                    //        this.setAttribute('href', data.data[0].images.low_resolution.url);
                    //        $(this).find('img').each(function () {
                    //            this.setAttribute('src', data.data[0].images.low_resolution.url);
                    //        });
                    //    });
                    //});

                    for (var i = 0; i < 3; i++) {
                        $('#thumbnail-tag' + i).each(function () {
                            console.log(this);
                            $(this).find('a').each(function () {
                                this.setAttribute('href', data.data[i].images.standard_resolution.url);
                                $(this).find('img').each(function () {
                                    this.setAttribute('src', data.data[i].standard_resolution.url)
                                        ;
                                });
                            });
                        });
                    }
                });
        });
});

