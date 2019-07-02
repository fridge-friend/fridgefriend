//Document. ready
$(document).ready(function () {



    var queryURLEdamam = "https://api.edamam.com/search?q=" + ingredients + "&app_id=26194528&app_key=be9ed2ffac6143f2a60323088693f678&from=0&to=3&calories=591-722&health=alcohol-free"


    $.ajax({
        url: queryURLEdamam,
        method: "GET"
    }).then(function (response) {
        console.log("EDAMAM: ")
        console.log(response)
    });
    //1. Take info from user
    // Global variable for user input info
    $(".material-icons").on('click', function (event) { // Search bar uses return key to search, so not sure if ".material-icons" is correct. 
        event.preventDefault();
        var ingredient = $(".material-icons").val().trim();
        var ingredientStr = String(ingredient);
        console.log(ingredients);
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
