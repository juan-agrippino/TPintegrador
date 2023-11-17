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




let url = new URLSearchParams(window.location.search).get("q")
let link = `https://api.themoviedb.org/3/search/movie?api_key=0331cddd490fdf784d51f00d86f1b001&query=${url}`
fetch(link)
.then(function(response) {
  return response.json()
})

.then(function(data) {
console.log(data);
datosr = document.querySelector(".resultados")
htmlresultados= ""
for (let index = 0; index < data.results.length; index++) {
    htmlresultados = `
    <p>titulo: ${data.results[index].original_title}</p>
    <img src="https://image.tmdb.org/t/p/w200/${data.results[index].poster_path}" alt="">
    `
    datosr.innerHTML += htmlresultados
}
})

.catch(function(error) {
  console.log("Error: " + error);
})
