const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const spotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors())
app.use(bodyParser.json())




app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new spotifyWebApi({
        redirectUri: 'http://localhost:5173',
        clientId: clientID,
        clientSecret: clientSecret,
        refreshToken
    })

    spotifyWebApi.refreshAccessToken()
    .then((data) => {
        console.log(data.body);
    }).catch(() => {
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
    }).catch((err) => {
        console.error('Authorization error:', err)
        res.sendStatus(400)
    })
})

app.listen(3001)
