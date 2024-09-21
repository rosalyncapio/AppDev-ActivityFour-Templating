const express = require('express');

const router = express.Router();
const musicplayer = require("../controller/musicplayer");


router.get('/',musicplayer.index);
router.get('/music/trending',musicplayer.trending);
router.get('/music/new_release',musicplayer.new_release);
router.get('/music/playlist',musicplayer.playlist);
router.get('/music/artist',musicplayer.artist);

module.exports = router;