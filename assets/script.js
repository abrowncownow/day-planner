//set header date
var today = moment().format("dddd MM/DD/YY");
$("#currentDay").text(today);

//save function
function saveLS(event) {
    event.preventDefault();
    index = $(this).data("index");
    console.log(index);
    var thisText = $(".textArea" + index).val();
    console.log(thisText);
    localStorage.setItem("row" + index, thisText);
}
//load function
function loadLS(){
    for (i=1; i<12; i++){
        if (localStorage.getItem("row" + i)){
        var data = localStorage.getItem("row" + i);
        console.log(data);
        $(".textArea" + i).val(data);}
    }
}
//load and listen
loadLS();
$(".save").click(saveLS);
