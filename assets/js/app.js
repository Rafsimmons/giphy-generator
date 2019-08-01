$(document).ready(function() { 
// get input value on search bar
var apiKey="Aq1A3tbXtbNHxiXCe1jpOz3aVv32tLq9";

$("#submit").click(function(event) {
    event.preventDefault();
  
    var gifSearch = $('#searchBar').val().trim();
    getGiphys(gifSearch)
})

function getGiphys(gifSearch) {
   
    $.get('http://api.giphy.com/v1/gifs/search?q=' + gifSearch + '&api_key='+ apiKey + '&limit=5')
        .done(function(data) {
            console.log(data)
        })
    }

})
