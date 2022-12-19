$(document).ready(function () {

    function clickButton(e) {
        e.preventDefault

        $("body").append('<div id="dane-programisty">data</div>');

        $.get("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function (data) {
            let dane = data;
            console.log(dane);
        
            $("#dane-programisty").text(dane);
        });
        
    }
    $("#btn").on("click", clickButton);

})
