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
    });


let url = new URLSearchParams(window.location.search).get("id")
let link = `https://api.themoviedb.org/3/movie/${url}?api_key=0331cddd490fdf784d51f00d86f1b001`

fetch(link)
.then(function(response) {
  return response.json()
})

.then(function(data) {

phtml = document.querySelector(".portada")
let pagtitulo = ""
    pagtitulo = `
<article class="card_peli">
    <h2>${data.original_title}</h2>
    <img class="portadaPelicula"src= "https://image.tmdb.org/t/p/w200/${data.poster_path}"  alt="">
    <p>${data.vote_average}/10 de calificacion</p>
    <p>Fecha de estreno: ${data.release_date}</p>
    <p>Duracion de la pelicula: ${data.runtime} minutos </p>
    <p>Sinopsis: ${data.overview}</p>
    <p>Géneros: `;
    
for (let index = 0; index < data.genres.length; index++) {
    pagtitulo += `<a>${data.genres[index].name}</a>`;
    if (index < data.genres.length - 1) {
        pagtitulo += ', ';
    }
}

pagtitulo += `</p> 
    </article>
    `;
phtml.innerHTML += pagtitulo
console.log(data);
  

})

.catch(function(error) {
  console.log("Error: " + error);
})


