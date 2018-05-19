//Callbacks
$("#newBurger").on("click", function () {
    var burgerName = $("#burger_name").val().trim()
    if (burgerName != "") {
        querystring = "/burgers/create"
        $.post(querystring, {
                name: burger_Name
            },
            function (data) {
                
            });
    }
});