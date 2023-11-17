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

link = "https://api.themoviedb.org/3/genre/movie/list?api_key=0331cddd490fdf784d51f00d86f1b001"

fetch(link)
.then(function(response) {
    return response.json()
  })
  .then(function(data) {
    let contenedor_generos = document.querySelector(".flex-peliculas_populares")
    generos = ""
    for (let index = 0; index < data.genres.length; index++) {
    generos = `<article>
    <a href="../HTMLs/detail-genres.html"class = "nombreGeneros">${data.genres[index].name}</a>
    </article>`
    contenedor_generos.innerHTML += generos
    
  }

  console.log(data);
  
  })
  
  .catch(function(error) {
    console.log("Error: " + error);
  })
  
link2 =  `https://api.themoviedb.org/3/genre/tv/list?api_key=0331cddd490fdf784d51f00d86f1b001`
fetch(link2)
.then(function(response) {
    return response.json()
  })
  .then(function(data) {
    let contenedor_generos = document.querySelector(".flex-series_populares")
    generos = ""
    for (let index = 0; index < data.genres.length; index++) {
    generos = `
    <article>
    <a href="../HTMLs/detail-genres.html"class = "nombreGeneros">${data.genres[index].name}</a>
    </article>`
    contenedor_generos.innerHTML += generos
    
  }

  console.log(data);
  
  })
  
  .catch(function(error) {
    console.log("Error: " + error);
  })
