$(document).ready(function() {
    $(".btn").click(function(event) {
        event.preventDefault();
        var person2Input = $("input#person2").val();
        var animalInput = $("input#animal").val();
        var exclamationInput = $("input#exclamation").val();
        var verbInput = $("input#verb").val();



        var arrayTry = [];
        arrayTry.push(person2Input, animalInput, exclamationInput, verbInput);



        $("#demo").text(arrayTry);

    });

});
