
let apiKey = '7de888ec46a76c5c2a9e0c5cf4fffc32';
let urlBase = 'https://api.themoviedb.org/3/search/movie';
let urlImage = 'https://image.tmdb.org/t/p/w200';
document.querySelector('#searchButton').addEventListener('click', searchMovies);
let searchMovie = document.querySelector('#searchInput')
let resultContainer = document.querySelector('#results');

//functions
function searchMovies(){
    resultContainer.innerHTML = 'Cargando...';
   let movie = searchMovie.value
    fetch(`${urlBase}?api_key=${apiKey}&query=${movie}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}

function displayMovies(movies){
    resultContainer.innerHTML = '';

    if(movies.length === 0){
        resultContainer.innerHTML = '<p>No se encontraron resultados para tu busqueda</p>';
        return;
    }
    movies.forEach(movie => {
        let movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        let title = document.createElement('h2');
        title.textContent = movie.title;

        let releaseDate = document.createElement('p');
        releaseDate.textContent = 'La fecha de lanzamiento fue: '+ movie.release_date;

        let overview = document.createElement('p');
        overview.textContent = movie.overview;

        let posterPath = urlImage+movie.poster_path ;
        let poster = document.createElement('img');
        poster.src = posterPath;

        movieDiv.appendChild(poster);
        movieDiv.appendChild(title);
        movieDiv.appendChild(releaseDate);
        movieDiv.appendChild(overview);
        resultContainer.appendChild(movieDiv);
    });
}