function inspire_us() {
    const appContainer = $('.app-container');

    function loadHtml() {
        appContainer.load('../views/inspire-us/inspire-us.html', onLoad());
    }

    function onLoad() {        
        let submitButton = $('#submit-picture');
        let pictureUrl = $('#picture-url');
        let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

        localStorage.setItem('items',JSON.stringify(itemsArray));
        const data = JSON.parse(localStorage.getItem('items'));

        submitButton.on('click',function(){
            itemArray.push(pictureUrl.val);
            localStorage.setItem("items", JSON.stringify(itemsArray));
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
