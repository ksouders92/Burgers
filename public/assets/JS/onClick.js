//Callbacks
$("#newBurger").on("click", function () {
    var burgerName = $("#burgername").val().trim()
    if (burgerName != "") {
        querystring = "/api/newburger"
        $.post(querystring, {
                name: burgerName
            },
            function (data) {
                
            });
    }
});