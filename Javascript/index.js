const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzMxY2RkZDQ5MGZkZjc4NGQ1MWYwMGQ4NmYxYjAwMSIsInN1YiI6IjY1NTI3YjUwNjdiNjEzNDVjZjAzZWIzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PQviloVu6dbx8zfk6p2-jxupVFNigdx-snIi2ZeGSDY'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

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

let urlPeliculas = "https://api.themoviedb.org/3/movie/top_rated?api_key=0331cddd490fdf784d51f00d86f1b001"
fetch(urlPeliculas)
.then(function(response) {
  return response.json()
})

.then(function(data) {
  console.log(data);
  let peliculas = data.results
  let peliculasContainer = document.querySelector(".flex-peliculas_populares")
  let htmlPeliculas = ""
  for ( index = 0; index < peliculas.length; index++) {
     element = peliculas[index];
     htmlPeliculas = `
     <article class="card">
       <a href="../HTMLs/detail-peliculas.html?id=${peliculas[index].id}">
       <img src="https://image.tmdb.org/t/p/w200/${peliculas[index].poster_path}" alt="">
       <p class="title uk-text-truncate">${peliculas[index].original_title}</p>  
       <p class="subtitle">${peliculas[index].release_date}</p>
       </a>
     </article>
       
       
`
peliculasContainer.innerHTML += htmlPeliculas
  }
  
  console.log(peliculas)
})

.catch(function(error) {
  console.log("Error: " + error);
})

let urlSeries = "https://api.themoviedb.org/3/tv/popular?api_key=0331cddd490fdf784d51f00d86f1b001"
fetch(urlSeries)
.then(function(response) {
  return response.json()
})

.then(function(data) {
  console.log(data);
  let peliculas = data.results
  let peliculasContainer = document.querySelector(".flex-series_populares")
  let htmlPeliculas = ""
  for ( index = 0; index < peliculas.length; index++) {
     element = peliculas[index];
     htmlPeliculas = `
     <article class="card">
       <a href="../HTMLs/detail-series.html?id=${peliculas[index].id}">
       <img src="https://image.tmdb.org/t/p/w200/${peliculas[index].poster_path}" alt="">
       <p class="title uk-text-truncate">${peliculas[index].original_name}</p>  
       <p class="subtitle">${peliculas[index].first_air_date}</p>
       </a>
     </article>
       
       
`
peliculasContainer.innerHTML += htmlPeliculas
  }
  
  console.log(peliculas)
})

.catch(function(error) {
  console.log("Error: " + error);
})

let urlPeliculas2 = "https://api.themoviedb.org/3/movie/popular?api_key=0331cddd490fdf784d51f00d86f1b001"
fetch(urlPeliculas2)
.then(function(response) {
  return response.json()
})

.then(function(data) {
  console.log(data);
  let peliculas = data.results
  let peliculasContainer = document.querySelector(".flex-peliculas_valoradas")
  let htmlPeliculas = ""
  for ( index = 0; index < peliculas.length; index++) {
     element = peliculas[index];
     htmlPeliculas = `
     <article class="card">
       <a href="../HTMLs/detail-peliculas.html?id=${peliculas[index].id}">
       <img src="https://image.tmdb.org/t/p/w200/${peliculas[index].poster_path}" alt="">
       <p class="title uk-text-truncate">${peliculas[index].original_title}</p>  
       <p class="subtitle">${peliculas[index].release_date}</p>
       </a>
     </article>
       
       
`
peliculasContainer.innerHTML += htmlPeliculas
  }
  
  console.log(peliculas)
})

.catch(function(error) {
  console.log("Error: " + error);
})
