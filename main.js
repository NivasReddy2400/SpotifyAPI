document.querySelector('#authorize').addEventListener('click',getAuthorization)
const AUTHORIZE = "https://accounts.spotify.com/authorize"
const TOKEN = "https://accounts.spotify.com/api/token";

function getAuthorization(){
const client_id = "12cd9bc4731d4da6814f1b9f20c2e9cb";
const secret_id = "1950f593870c432d941914b3dc057627"; 
const redirect_uri = "http://127.0.0.1:5500/"
const scope = 'user-read-private user-read-email user-top-read';

var url = 'https://accounts.spotify.com/authorize';
url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(client_id);
url += '&scope=' + encodeURIComponent(scope);
url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
url += '&show_dialog=true';
console.log(url,"the url is ")
window.location.href = url
}

const accessToken = window.location.hash.substr(1).split('&')[0].split('=')[1]
console.log(accessToken)
var endpointUrl = 'https://api.spotify.com/v1/me/top/tracks';

var headers = {
  'Authorization': 'Bearer ' + accessToken
};

fetch(endpointUrl, { headers })
  .then(response => response.json())
  .then((data) => store(data))
  .catch(error => console.error(error));

  function store(data){
    console.log(data)
    console.log(data.href)
  }