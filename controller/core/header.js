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

                    var landscapeImgs = [];
                    for (var i = 0; i < data.data.length; i += 1) {
                        if (data.data[i].tags == "landscapes") {
                            landscapeImgs.push(data.data[i]);
                        }
                    }
                    
                    for (var j = 0; j < landscapeImgs.length; j++) {
                        $('#thumbnail-tag' + j).each(function() {
                            console.log(this);
                            $(this).find('a').each(function() {
                                this.setAttribute('href', landscapeImgs[j].images.standard_resolution.url);
                                $(this).find('img').each(function() {
                                    this.setAttribute('src', landscapeImgs[j].images.standard_resolution.url);
                                });
                            });
                        });
                    }
                });
        });
});

