const express = require('express')
const axios = require('axios');
const querystring = require('querystring');

const app = express();
const PORT = 3000;


const AUTHORIZE = "https://accounts.spotify.com/authorize";
const TOKEN =     "https://accounts.spotify.com/api/token";
const client_id = "12cd9bc4731d4da6814f1b9f20c2e9cb";
const secret_id = "1950f593870c432d941914b3dc057627";  
const REDIRECT_URI = "http://localhost:3000/callback"
const SCOPE = 'user-read-private user-read-email user-top-read';

app.get('/', (req, res) => {
  res.send(200)
});

app.get('/login', (req, res) => {
  res.redirect(AUTHORIZE +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: SCOPE,
      redirect_uri: REDIRECT_URI
    }));
});



app.get('/callback',(req,res)=>{

})




app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
