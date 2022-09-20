//set header date
var today = moment().format("dddd MM/DD/YY");
$("#currentDay").text(today);
//save function
function saveLS(event) {
    event.preventDefault();
    var thisbtn = $(this);
    var index = $(this).data("index");
    var thisText = $(".textArea" + index).val();
    console.log(thisText);
    localStorage.setItem("row" + index, thisText);
    $(this).addClass("saved");
    setTimeout(function(){thisbtn.removeClass("saved");}, 1250);
}
//load function
function loadLS() {
    for (i = 8; i < 25; i++) {
        if (localStorage.getItem("row" + i)) {
            var data = localStorage.getItem("row" + i);
            $(".textArea" + i).val(data);
        }
        //style backgrounds depending on past, present, future
        if (i < moment().hours()) {
            $(".textArea" + i).addClass("past");
        } else if (i == moment().hours()) {
            $(".textArea" + i).addClass("present");
        } else if (i > moment().hours()) {
            $(".textArea" + i).addClass("future");
        }
    }
}
//load and listen
loadLS();
$(".save").click(saveLS);
