jQuery.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});



//Document. ready
$(document).ready(function () {


    $("#ingredient-form").submit(function (event) { // Search bar uses return key to search, so not sure if ".material-icons" is correct. 
        event.preventDefault();
        var ingredient = $("#ingredient-input").val().trim();
        var queryURLEdamam = "https://api.edamam.com/search?q=" + ingredient + "&app_id=26194528&app_key=be9ed2ffac6143f2a60323088693f678&from=0&to=3&calories=591-722&health=alcohol-free"
        console.log("user Slection :" + ingredient);
        $.ajax({
            url: queryURLEdamam,
            method: "GET"
        }).then(function (response) {


            // shows object in console.log
            console.log("EDAMAM: ")
            console.log(response)



            var recipeSearch = JSON.stringify(response.hits)
            console.log(recipeSearch)

            //For loop that goes through all the recipes
            for (var i = 0; i < recipeSearch.length; i++) {
                //Array of recipes
                var recipesArr = response.hits[i].recipe
                //Variable for the name of recipe
                var recipesName = recipesArr.label
                console.log("Recipe Name ---------------")
                console.log(recipesName)

                //For loop that goes through the ingredients of each recipe
                $("#recipeContainer").append("<div>" + recipesName + "</div>");
                for (var g = 0; g < recipesArr.ingredients.length; g++) {
                    var recipesIngredients = recipesArr.ingredients[g].text
                    $("#recipeContainer").append("<div>" + recipesIngredients + "</div>");
                    console.log(recipesIngredients)
                }
            }


            // returns name of recipe in console log
            console.log(JSON.stringify(response.hits[1].recipe.label))
            var recipeName = JSON.stringify(response.hits[1].recipe.label)
            // link to image for recipe in console log
            console.log(JSON.stringify(response.hits[1].recipe.image))



        });

        //Call the API with AJAX
        var queryURLWalmart = "http://api.walmartlabs.com/v1/search?apiKey=5kcaf3pvmah6ryds9qa9q3aw&query=" + ingredient;
        $.ajax({
            url: queryURLWalmart,
            method: "GET"
        }).then(function (response) {

            //Walmart full object from Wallmart
            console.log("WALLMART: ")
            console.log(response)
            //Image of the product
            console.log(JSON.stringify(response.items[0].thumbnailImage))
            //Name of the product
            console.log(response.items[0].name)
            //Price of the product
            console.log(JSON.stringify(response.items[0].msrp))
            //Link to the URL of the product
            for (var j = 0; j <= 5; j++) {

                //If available online is tru add the Url

                if (response.items[j].availableOnline) {

                    var $newButton = $('<button>')

                    var cartLink = response.items[j].addToCartUrl
                    console.log("Links-----")
                    console.log(cartLink)
                    $newButton.attr('href', cartLink);

                    $newButton.addClass("walmart-button")
                    $newButton.text(response.items[j].name)

                    $("#walmartContainer").append($newButton)
                }



            }





        });





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
