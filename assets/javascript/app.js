
jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

$(document).ready(function () {

    //#API URL= Walmart
    var queryURLWalmart = "http://api.walmartlabs.com/v1/search?apiKey=5kcaf3pvmah6ryds9qa9q3aw&query=1bloodorange";

    //#API URL= EDAMAM
    var queryURLEdamam = "https://api.edamam.com/search?q=chickenbreasts&app_id=26194528&app_key=be9ed2ffac6143f2a60323088693f678&from=0&to=3&calories=591-722&health=alcohol-free"


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
        console.log("WALLMART: " )
        console.log(response)
    });

    $.ajax({
        url: queryURLEdamam,
        method: "GET"
    }).then(function (response) {
        console.log("EDAMAM: ")
        console.log(response)
    });
});
