$.ajax({
    url: "https://loop-back-demo-hennigk.c9.io/api/AddressBooks",
    dataType: "JSON"
}).done(function(data){
    for (var i in data) {
        $("#api").append(JSON.stringify(data[i], null, "<br>") + "<br><br>");
    }
})