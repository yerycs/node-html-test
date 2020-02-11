$(document).ready(function(event){
    $.ajax({
        url: "http://localhost:4000/api/test/getItems",
        success: function(results){
            for(i = 0; i < results.length; i++) {
                $('.row').append("<div class=\"item\">\n" +
                    "                <div class=\"item-title\">\n" +
                    "                    <p class='grid' id='" + i + "'>\n" +
                    "                        " + results[i].title + "\n" +
                    "                    </p>\n" +
                    "                </div>\n" +
                    "                <div class=\"item-content\" id='gridContent" + i + "'>\n" +
                    "                    <p>\n" +
                    "                        " + results[i].content + "\n" +
                    "                    </p>\n" +
                    "                </div>\n" +
                    "            </div>");
                $('.flex-container').append("<div class=\"flex-item\">\n" +
                    "                <div class=\"item-title\">\n" +
                    "                    <p class='flex' id='" + i + "'>\n" +
                    "                        " + results[i].title + "\n" +
                    "                    </p>\n" +
                    "                </div>\n" +
                    "                <div class=\"item-content\" id='flexContent" + i + "'>\n" +
                    "                    <p>\n" +
                    "                        " + results[i].content + "\n" +
                    "                    </p>\n" +
                    "                </div>\n" +
                    "            </div>");
                $('.item-content').css('opacity', '0');
            }
        }
    });
});
$(document).click(function(event) {
    console.log(event.target.className);
    if(event.target.className === 'grid') {
        $('#gridContent' + event.target.id).animate({
            opacity: '1'
        });
    }
    else {
        $('#flexContent' + event.target.id).animate({
            opacity: '1'
        });
    }
});