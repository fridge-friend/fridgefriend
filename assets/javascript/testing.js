//Document. ready
$(document).ready(function () {

    var ingredientArr = []
    console.log(ingredientArr)
    
    function searchIngredient (){
        var ingredient = $(this).attr("ingredient-user");
            var queryURLEdamam = "https://api.edamam.com/search?q=" + ingredient + "&app_id=26194528&app_key=be9ed2ffac6143f2a60323088693f678"
 
    
        $.ajax({
            url: queryURLEdamam,
            method: "GET"
        }).then(function (response) {
            console.log("EDAMAM:  " + response)
        });
    }


    $("#search").on('return', function(event){
        event.preventDefault();
        var ingredient = $("#search").val();
        // The movie from the textbox is then added to our array
        ingredientArr.push(ingredient);
        console.log(ingredientArr)
        searchIngredient
    })






    // (use giphy film example)
    // Take user input and make into ingredients variable
    // On click function to pull ingredients from API to find recipe

    // 2. Displaying results
    // Create the cards that display recipe in HTML
    //Trim the the result

    //3. Store the ingredients from the selected recipe and search walmart api
    //4. Display results of walmart API search

});
