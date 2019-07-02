
jQuery.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

var UserInput = "chicken"

$(document).ready(function () {

    //#API URL= Walmart
    var queryURLWalmart = "http://api.walmartlabs.com/v1/search?apiKey=5kcaf3pvmah6ryds9qa9q3aw&query="+ UserInput;

    //#API URL= EDAMAM
<<<<<<< HEAD
    var queryURLEdamam = "https://api.edamam.com/search?q=chicken&app_id=26194528&app_key=be9ed2ffac6143f2a60323088693f678&from=0&to=3&calories=591-722&health=alcohol-free"
    var card = $("#card")
=======
    var queryURLEdamam = "https://api.edamam.com/search?q="+ UserInput +"&app_id=26194528&app_key=be9ed2ffac6143f2a60323088693f678&"
>>>>>>> origin/gh-pages

    // cards will go inside of this array
    //TO DOS
    //Store user data
    //Search in API of Edamame the ingredients
    //Store the result and search the answer in the other API
    //Show the results on the shopping cartt

    //Call the API with AJAX
    $.ajax({
        url: queryURLWalmart,
        method: "GET"
    }).then(function (response) {
<<<<<<< HEAD
        console.log(response);
        var cards = [
            {
                image: 0,
                title: 0,
                ingredients: 0
            }];
=======
        console.log("WALLMART: " )
        console.log(response)
>>>>>>> origin/gh-pages
    });

    $.ajax({
        url: queryURLEdamam,
        method: "GET"
    }).then(function (response) {
        console.log("EDAMAM: ")
        console.log(response)
    });
});



// Search button //
function start() {

    $("#search").remove();
    for (var i = 0; i < cards.length; i++) {
        card.append("<h2>" + cards[i].image + "</h2>");
    }
}


//places cards on the page//


card.append()
$("#search").on("click", function () {
    console.log("cards should replace start button");
    $("#container").css("display", "block");

});



