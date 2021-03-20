const SpotifyWebApi = require("spotify-web-api-node");

const refreshMiddleware = (req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      res.json({ accessToken: data.body.accessToken, expiresIn: data.body.expiresIn });
    })
    .catch(() => {
      res.sendStatus(400);
    });
};

module.exports = refreshMiddleware;
