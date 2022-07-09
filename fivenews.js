
    
function news(){
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=9efa20e612c74a74be00533a53b16a04")
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.log(err.message));
    location.href="./newsfeed.html";
}


