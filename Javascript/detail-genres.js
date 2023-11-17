let formulario = document.querySelector(".form")
let busqueda = document.querySelector(".busqueda")
formulario.addEventListener("submit", function(event){
  event.preventDefault();
  if (busqueda.value === "") {
      alert("El campo no puede estar vacío.");
    } else if (busqueda.value.length < 3) {
      alert("El término buscado debe tener al menos 3 caracteres.");
    } else {
      window.location.replace(`../HTMLs/search-results.html?q=${busqueda.value}`)
    }
})


let api_key = "0331cddd490fdf784d51f00d86f1b001";
let url_genres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`;

fetch(url_genres)
  .then(response => response.json())
  .then(function(data) {
    console.log(data);

    let genresContainer = document.querySelector(".flex_peliculas_generos");
    let modifGenresContainer = '';

    data.genres.forEach(genre => {
      let genreMovieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${genre.id}`;

      fetch(genreMovieUrl)
        .then(response => response.json())
        .then(genreData => {
          console.log(genreData);
          let genreResults = genreData.results;

          let genreMoviesRandom = [];
          while (genreMoviesRandom.length < 6) {
            let genreMovieId = Math.floor(Math.random() * genreResults.length);
            let genreRepetido = false;

            for (let i = 0; i < genreMoviesRandom.length; i++) {
              if (genreMoviesRandom[i] === genreMovieId) {
                genreRepetido = true;
                break;
              }
            }

            if (!genreRepetido) {
              genreMoviesRandom.push(genreMovieId);
            }
          }

          for (let i = 0; i < 6; i++) {
            let genreId = genreMoviesRandom[i];
            let movie_id = genreResults[genreId].id;
            let movie_title = genreResults[genreId].title;
            let posterPath = genreResults[genreId].poster_path;
            let poster = "https://image.tmdb.org/t/p/w200" + posterPath;

            modifGenresContainer += `
              <article class="peli">
                <a class="vinculoGenero" href="../HTMLs/detail-peliculas.html"><img src="${poster}" alt="${movie_title}" class="pelimg">
                <h2 class="titulo peli">${movie_title}</h2>
                </a>
              </article>
            `;
          }

          modifGenresContainer += `</div>`;
          genresContainer.innerHTML = modifGenresContainer;
        })
        .catch(error => console.error(`Error al obtener películas por género: ${error}`));
    });
  })
  .catch(error => console.error(`Error al obtener géneros de películas: ${error}`));