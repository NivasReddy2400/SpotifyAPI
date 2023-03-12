const express = require('express')
const querystring = require('querystring');
// const app = express();

// //app.use(express.urlencoded())

// const AUTHORIZE = "https://accounts.spotify.com/authorize"
// const TOKEN = "https://accounts.spotify.com/api/token";

// const client_id = "d330537d0c074dad9355cc05e2423014";
// const client_secret = "aa928b3e7c5446619cf2101e99720eb8"; 
// const redirect_uri = "http://localhost:3000/callback"
// const scope = 'user-read-private user-read-email user-top-read';

// app.get('/',(req,res)=>{
//     res.redirect('https://accounts.spotify.com/authorize?' + 
//     querystring.stringify(
//     {response_type: 'code',
//     client_id: client_id,
//     scope: scope,
//     redirect_uri: redirect_uri}))
// });

// app.get('/callback',(req,res) =>{
//   const code = req.query.code
//   res.send('hello')
// })

// app.listen(3000)
var app = express();
app.listen(3000);

var client_id = "d330537d0c074dad9355cc05e2423014";
var redirect_uri = "http://localhost:3000/callback";


app.get('/login', function(req, res) {

  var scope = 'user-read-private user-read-email user-top-read';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri
    }));
});

app.get('/callback',(req,res)=>{
  
  var code = req.query.code;
  console.log(code)
  res.end()
  
});




