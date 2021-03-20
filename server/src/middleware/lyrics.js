const lyricsFinder = require("lyrics-finder");

const lyricsMiddleware = async (req, res) => {
  const lyrics =
    (await lyricsFinder(req.query.artist, req.query.track)) || "Sorry, no lyrics found.";
  res.json({ lyrics });
};

module.exports = lyricsMiddleware;
