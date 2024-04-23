const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const spotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors())
app.use(bodyParser.json())

const clientID = "f656785c2ad94863a9bb9403c5ac4ed7";
const clientSecret = "9ebeee28015543ec9b01d3ba09c61dbd";

app.post('/login', (req, res) => {
    const code: string = req.body.code
    const spotifyApi = new spotifyWebApi({
        redirectUri: 'http://localhost:5173',
        clientId: "f656785c2ad94863a9bb9403c5ac4ed7",
        clientSecret: "9ebeee28015543ec9b01d3ba09c61dbd"
    })

    spotifyApi.authorizationCodeGrant(code)
    .then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch((err) => {
        console.log('hi')
        console.log(err)
        res.sendStatus(400)
    })
})

app.listen(3001)