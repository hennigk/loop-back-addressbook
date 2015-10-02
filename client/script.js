$.ajax({
    url: "https://loop-back-demo-hennigk.c9.io/api/AddressBooks",
    dataType: "JSON"
}).done(function(data){
    for (var i in data) {
        $("#api").append(JSON.stringify(data[i], null, "<br>") + "<br><br>");
    }
})


$('#button').click(function() {
    var $inputs = $('#form :input');
    var values = {};
    $('#form').val("");
    $inputs.each(function() {
        if ($(this).val()) {
        values[this.name] = $(this).val();
        }
    });
    values.addressBookId = "1";
    console.log(values);
    $.ajax({
        url: "https://loop-back-demo-hennigk.c9.io/api/Entries",
        type: "post",
        data: values,
        dataType: 'html',
    }).done(function(response){
        $("#addedEntry").append(response + "<br>");
        $("#inputs :input").each(function(){
            $(this).val('');
        });
        
    })
});
