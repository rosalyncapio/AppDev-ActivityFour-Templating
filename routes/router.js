const express = require('express');

const router = express.Router();
const musicplayer = require("../controller/musicplayer");


router.get('/',musicplayer.index);
router.get('/music/about',musicplayer.about);
router.get('/music/discography',musicplayer.discography);
router.get('/music/tours',musicplayer.tours);
router.get('/music/blog',musicplayer.blog);
router.get('/music/blogdetails',musicplayer.blogdetails);
router.get('/music/videos',musicplayer.videos);
router.get('/music/contact',musicplayer.contact);


module.exports = router;