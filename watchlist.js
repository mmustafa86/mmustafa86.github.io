

 document.addEventListener(`DOMContentLoaded`, function() {              
    var added=localStorage.getItem('watchlist')
    var addedJson= JSON.parse(added);
    
    function renderMovieAdd(arr){
    var movieAdded= arr.map(function(currentMovie){
    
    var movieHTML=`<div class="movie col-md-4 p-3"><div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${currentMovie.Poster}." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${currentMovie.Title}<h6>Example heading <span class="badge badge-secondary">${currentMovie.Year}</span></h6></h5>
      
      <a href="#" class="btn btn-primary" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add</a>
    </div>
    </div>
    </div>`
    
    return movieHTML;
    });
    return movieAdded.join(' ');
    
    };
    var content = document.getElementsByClassName("movies-container")[0] ;
     content.innerHTML=renderMovieAdd(addedJson);
     console.log(addedJson)
// var content = document.getElementsByClassName("movies-container")[0] ;
//      content.innerHTML=`<p>${added}</p>;`

 })

    // document.getElementById('search-form').addEventListener('submit', function(e){
       
       
    //     content.innerHTML=renderMovie(movieData);
    //     e.preventDefault()
       
    // }) 