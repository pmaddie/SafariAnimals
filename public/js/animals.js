$(function() {
    $(".change-seen").on("click", function(event){
       event.preventDefault();
        let id = $(this).data("id");
        let seen = $(this).data("seen");

//to switch sides
        if (seen == 1) {
            seen = 0;
        } else{
            seen = 1;
        };
        //to put into tables
let newseenstate = {
    seen: seen
};

//sends info to update orm to change the value of seen
$.ajax("/api/animals/" + id, {
        type: "PUT",
        data: newseenstate
    }).then(function(){
console.log("changed seen state to: " + seen);
location.reload();
    })
})

        //put method
//on click to move animals 
//


    })
//create
//on submit 
$(".submitnew").on("click", function(event){
    event.preventDefault();
    //Build up the animal object with the values from the form
    var newAnimal = {
        name:$("#animal").val().trim(),
        seen:$('input[type="radio"]:checked').val()
    }
    console.log("Object from form:", newAnimal);
    
    //Ajax post that sends the request to the server
    $.ajax("/api/safarianimal", {
        type: "POST",
        data: newAnimal
    }).then(function(){
        console.log("adding new animal");
    location.reload();
    })
})
