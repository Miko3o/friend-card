const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const spotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors())
app.use(bodyParser.json())

const clientID = "3f726e510e704716a984793b24877ced";
const clientSecret = "63c553e7fae84d98a9fbd57bee8b5685";


app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new spotifyWebApi({
        redirectUri: 'http://localhost:5173',
        clientId: clientID,
        clientSecret: clientSecret,
        refreshToken
    })

    spotifyApi.refreshAccessToken()
    .then((data) => {
        res.json({
            accessToken: data.body.accessToken,
            expiresIn: data.body.expiresIn
        });
    }).catch(err => {
        console.log(err)
        res.sendStatus(400)
    })
})



app.post('/login', (req, res) => {

    const code = req.body.code
    const spotifyApi = new spotifyWebApi({
        redirectUri: 'http://localhost:5173',
        clientId: clientID,
        clientSecret: clientSecret
    })

    spotifyApi.authorizationCodeGrant(code)
    .then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
            hi: 'hi'
        })
    }).catch(err => {
        console.error('Authorization error:', err)
        res.sendStatus(400)
    })
})

app.listen(3001)
