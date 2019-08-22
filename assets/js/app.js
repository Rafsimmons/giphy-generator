$(document).ready(function() { 
// string of arrays 
var friends=["Ross", "Joey", "Chandler", "Monica", "Phoebe", "Rachel"];
var $imgBody=$('.img-body');
var apiKey="Aq1A3tbXtbNHxiXCe1jpOz3aVv32tLq9";

// click function on submit to retreive data from search bar
$("#submit").click(function(event) {
    event.preventDefault();
  
    var gifSearch = $('#searchBar').val().trim();
    getGiphys(gifSearch)
})

function getGiphys(gifSearch) {
   
    $.get('http://api.giphy.com/v1/gifs/search?q=' + gifSearch + '&api_key='+ apiKey + '&limit=5')
        .done(function(data) {
            for (let i = 0; i < 5; i++) {
                
                console.log(data.data[i].images.downsized.url)
                
            }
            })
    }
function creatBox(){
    var $img=$('img');
    var $div=$('div');
    $img.append($imgBody);
}
})
