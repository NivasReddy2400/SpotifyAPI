document.querySelector('#authorize').addEventListener('click',getAuthorization)
const AUTHORIZE = "https://accounts.spotify.com/authorize"
const TOKEN = "https://accounts.spotify.com/api/token";

function getAuthorization(){
const client_id = ""; 
const redirect_uri = "http://127.0.0.1:5501/"
const scope = 'user-read-private user-read-email user-top-read';

let url = 'https://accounts.spotify.com/authorize';
url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(client_id);
url += '&scope=' + encodeURIComponent(scope);
url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
url += '&show_dialog=true';
window.location.href = url
}

const accessToken = window.location.hash.substr(1).split('&')[0].split('=')[1]
var endpointUrl = 'https://api.spotify.com/v1/me/top/tracks';

// const headers = {
//   'Authorization': 'Bearer ' + accessToken
// };

// fetch(endpointUrl, { headers })
//   .then(response => response.json())
//   .then((data) => store(data))
//   .catch(error => console.error(error));

//   function store(data){
//     console.log(data)
//   }

  axios.get('https://api.spotify.com/v1/me/top/tracks',{
    headers:{
      'Authorization': 'Bearer ' + accessToken
    }
  }).then((response)=>{
    return storeData(response)
  }).catch((err)=>{
    console.log(err)
  })


  function storeData(response){
    let artists = [];
    let tracks = [];
    for(let i=0;i <=19;i++){
      console.log('Artist-',response.data.items[i].artists[0].name)
      console.log('Track-',response.data.items[i].name)
      artists.push(response.data.items[i].artists[0].name)
      tracks.push((response.data.items[i].name))
    }
  
  }

