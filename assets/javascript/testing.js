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
        var queryURLEdamam = "https://api.edamam.com/search?q=" + ingredient + "&app_id=26194528&app_key=be9ed2ffac6143f2a60323088693f678&from=0&to=6&calories=591-722&health=alcohol-free"
        
        $.ajax({
            url: queryURLEdamam,
            method: "GET"
        }).then(function (response) {


            // shows object in console.log
            console.log("EDAMAM: ")
            console.log(response)

            var recipeSearch = JSON.stringify(response.hits)
            

            //Make sure the recipe exists
            $("#recipeContainer").empty();
            $("#walmartContainer").empty();

            //For loop that goes through all the recipes
            for (var i = 0; i < recipeSearch.length; i++) {
                //Card div that has all the content
                var $newDivCard = $("<div>");
                $newDivCard.addClass("card");
                $newDivCard.addClass("styleCard");
                $newDivCard.addClass("col s12");
                $newDivCard.addClass("m3");



                //Array of recipes
                var recipesArr = response.hits[i].recipe

                //Recipe Image
                var recipesImage = response.hits[i].recipe.image
                var $newImage = $("<img>");
                $newImage.attr("src", recipesImage);


                //Variable for the name of recipe
                var $newTitle = $("<span>")
                $newTitle.addClass("card-title");
                var recipesName = recipesArr.label
                $newTitle.text(recipesName);

                //Box for the image
                var $imageBox = $("<div>")
                $imageBox.addClass("card-image");

                //Add the content of Image and text
                $imageBox.append($newImage)
                $imageBox.append($newTitle)

                //Show everything in the document
                $newDivCard.append($imageBox)

                //variable to show            

                var $cardContent = $("<div>");
                $cardContent.addClass("card-content");

                //For loop that goes through the ingredients of each recipe
                for (var g = 0; g < recipesArr.ingredients.length; g++) {

                    //Search the ingredients on the Array
                    var recipesIngredients = recipesArr.ingredients[g].text


                    //We create a div to show each ingredient on a list
                    var $ingredientDiv = $("<ul>")
                    $ingredientDiv.append(recipesIngredients);

                    $cardContent.append($ingredientDiv)
                    $newDivCard.append($cardContent)

                }


                $("#recipeContainer").append($newDivCard)
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

            //For loop that search for the URL inside Walmart API
            for (var j = 0; j <= 5; j++) {


                //If available online is tru add the Url

                if (response.items[j].availableOnline) {

                    var $newButton = $('<button>')

                    //Link to cart 
                    var cartLink = response.items[j].addToCartUrl
                    $newButton.attr('href', cartLink);

                    $newButton.addClass("walmart-button")
                    $newButton.text(response.items[j].name)

                    //Walmart Image
                    var walmartImg = response.items[j].thumbnailImage
                    var $newImage = $("<img>")
                    $newImage.attr(walmartImg)
                    console.log("Image-----")
                    console.log(walmartImg)

                    $("#walmartContainer").html($newImage)
                    $("#walmartContainer").html($newButton)
                }

                //when you click the button display it links to the page on wallmart
                $(".walmart-button").on("click", function (event) {
                    window.location = $(this).attr('href')
                })

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
