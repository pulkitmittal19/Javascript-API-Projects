$(document).ready(()=> {
    $('#searchForm').on('submit' , (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();

    });
});

function getMovies(searchText){
    axios.get("https://api.themoviedb.org/3/search/movie?api_key=98325a9d3ed3ec225e41ccc4d360c817&language=en-US&query=" + searchText)
    .then((response) =>{

        let  movies = response.data.results; 
        let output = '';

        $.each(movies, (index, movie) =>{
            output+=`
              <div class= "col-md-3">
                <div class="well text-center">
                  <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
                  <h5>${movie.title}</h5>
                  <a onclick="movieSelected('${movie.id}')" class="btn btn-primary" href="#">Movie Details</a>
                </div>
              </div>
            `; 
        });

        $('#movies').html(output);
    })
    .catch((err) => {
    
    });

}

