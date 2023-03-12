document.querySelector('#authorize').addEventListener('click',getAuthorization)
const AUTHORIZE = "https://accounts.spotify.com/authorize"
const TOKEN = "https://accounts.spotify.com/api/token";

window.onload = () => {
    if ( window.location.search.length > 0 ){
        handleRedirect();
    }
}

function getAuthorization(){
const client_id = "d330537d0c074dad9355cc05e2423014";
const secret_id = "aa928b3e7c5446619cf2101e99720eb8"; 
const redirect_uri = "http://127.0.0.1:5500/"
const scope = 'user-read-private user-read-email user-top-read';

var url = 'https://accounts.spotify.com/authorize';
url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(client_id);
url += '&scope=' + encodeURIComponent(scope);
url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
url += '&show_dialog=true';
window.location.href = url
}

const accessToken = window.location.hash.substr(1).split('&')[0].split('=')[1]

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