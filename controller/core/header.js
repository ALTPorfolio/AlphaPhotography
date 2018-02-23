$('.header-container').on('click', '#landscapes-btn', function() {
    $('.app-container').load('../views/portfolio/landscapes.html');
});

$('.header-container').on('click', '#portraits-btn', function() {
    $('.app-container').load('../views/portfolio/portraits.html');
});

$('.header-container').on('click', '#home-btn', function() {
    $('.app-container').load('../views/core/home.html');
});

$('.header-container').on('click', '#photosessions-btn', function() {
    $('.app-container').load('../views/photosessions/photosessions.html');
});

