var movieList = [
  { title: "Star Wars: Return of the Jedi", year: "1977", length: 125, rating: "8.4", genre: "sci-fi" },
  { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
  { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },
  { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
  { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
  { title: "The Matrix Reloaded", year: "2003", length: 138, rating: "7.2", genre: "sci-fi" },
  {title:"Grudge",year:"2004",length:165,rating: "8.0",genere:"horror"}
 
];

function getMovieTitle( index ){
  return movieList[index].tittle;
}

console.log(getMovieTitle(3));
console.log(getMovieTitle(0));
console.log(getMovieTitle(6));

function addMovie( movie ){
  movieList.push(movie);
  return movieList;

}

var newMovie = {title:"Grudge",year:"2004",length:165,rating: "8.0",genere:"horror"} ;
console.log(addMovie(newMovie));

function movieByRating(){
  
}

console.log(movieByRating());

function findByTitle( title ){
  //add code
}

console.log(findByTitle("matrix"));
