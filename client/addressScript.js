$(document).ready(function(){
   $.ajax({
        url: "https://loop-back-demo-hennigk.c9.io/api/AddressBooks?filter[limit]=5&[order]=id:ASC",
        dataType: "JSON"
    }).done(function(data){
        console.log(data)
        for (var i in data) {
        $("#addressBookList").append("<li id='book" + data[i].id + "'> #" + data[i].id + " " + data[i].name+"</li>");
        $("#book" + data[i].id).click(function(){
            var id = (this.id).substring(4);
            $(".bookList").hide();
            $.ajax({
                url: ("https://loop-back-demo-hennigk.c9.io/api/Entries?filter[where][addressBookId]="+ id+"&filter[order]=lastName%20ASC&filter[limit]=5"),
                dataType: "JSON"
            }).done(function(entry){
                $(".entryList").show();
                console.log(entry);
                for (var j in entry) {
                    $("#entries").append("<li id='entry" + entry[j].id + "'>" + entry[j].lastName + ", " + entry[j].firstName + "</li>");
                    $("#entry" + entry[j].id).click(function(){
                        var entryId = ((this.id).substring(5))
                        console.log(entryId)
                        $.ajax({
                            url: "https://loop-back-demo-hennigk.c9.io/api/Entries?filter[where][id]=" + entryId + "&filter[include]=addresses&filter[include]=phones&filter[include]=emailAddresses",
                            dataType: "JSON"
                            }).done(function(person){
                                for (var key in person[0]){
                                $("table").append("<tr><td>"+ [key] +": </td><td>"+person[0][key]+"</td></tr>")
                                }
                                $(".entryList").hide();
                                $("#entryTable").show();
                            })    
                    })           
                }
            })
        })
            
        }
    })
})


// $("#next").click(function(){
          
// })
// function viewSelected(selectedId){
//   $.ajax({
//         url: ("https://loop-back-demo-hennigk.c9.io/api/Entries?filter[where][addressBookId]="+ id+"&filter[order]=lastName%20ASC&filter[limit]=5"),
//         dataType: "JSON"
//         }).done(function(entry){
//             $(".entryList").show();
//             console.log(entry); 
// }


// $("#book" + data[i].id)

    


/*
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
*/