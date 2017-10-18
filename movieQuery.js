var movieList = [
  { title: "Star Wars: Return of the Jedi", year: "1977", length: 125, rating: "8.4", genre: "sci-fi" },
  { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
  { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },
  { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
  { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
  { title: "The Matrix Reloaded", year: "2003", length: 138, rating: "7.2", genre: "sci-fi" },
 { title: "Moana", year: "2017", length: 142, rating: "8.0", genre: "Adventure" }
 
];

function getMovieTitle( index ){
  return movieList[index].tittle;
}

function addMovie( movie ){
  movieList.push(movie);
  return movieList;

}

var newMovie = {title:"Grudge",year:"2004",length:165,rating: "8.0",genere:"horror"} ;
console.log("\n\nAdd movie: \n\n");
console.log(addMovie(newMovie));

function movieByRating(){
   var init = [];
   for(var i=0; i<movieList.length; i++){
     for(var j=i; j<movieList.length-1; j++){
       if(movieList[j].rating<movieList[j+1].rating){
         init=movieList[j];
         movieList[j]=movieList[j+1];
         movieList[j+1]=init;
       }
     }
   }
   movieList.sort(function(a, b){
     return (b.rating)-(a.rating);
   });
    return movieList;
  }
  
  console.log("\n\nsorted by ratings in descending order: \n\n");
  console.log(movieByRating());


function findByTitle( title ){
  //add code
  var list = [];
  movieList.map(function(v,i){
    if(v.title.toLowerCase().includes(title)) list.push(v);
  });
  return list;
}
console.log("\n\nMovie found by title: \n\n");
console.log(findByTitle("matrix"));
