                              
                            
                            
document.addEventListener(`DOMContentLoaded`, function() {              

function renderMovie(movieArray){
var movies=movieArray.map(function(currentMovie){

var movieHTML=`<div class="movie col-md-4 p-3"><div class="card" style="width: 18rem;">
<img class="card-img-top" src="${currentMovie.Poster}." alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">${currentMovie.Title}<h6>Example heading <span class="badge badge-secondary">${currentMovie.Year}</span></h6></h5>
  
  <a href="#" class="btn btn-primary" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add</a>
</div>
</div>
</div>`

return movieHTML;
})
return movies.join(' ')

}
var content = document.getElementsByClassName("movies-container")[0] ;
// content.innerHTML=renderMovie(movieData);
document.getElementById('search-form').addEventListener('submit', function(e){
   
   
    content.innerHTML=renderMovie(movieData);
    e.preventDefault();
   
}) 



  })
  function saveToWatchlist(imdbID){
    
var movie = movieData.find(function(currentMovie){
return currentMovie.imdbID==imdbID;

})

var watchListJson = localStorage.getItem('watchlist')
var watchlist=JSON.parse(watchListJson);

if(watchListJson===null){
    var watchlist=[]
}

watchlist.push(movie);
 watchlistJSON = JSON.stringify(watchlist);
 localStorage.setItem('watchlist', watchlistJSON);
console.log(watchlistJSON)

}