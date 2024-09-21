const musicplayer = {
    index: (req, res) => {
        res.render('home');
    },
    trending: (req, res) => {
        res.render('trending');
    },
    new_release: (req, res) => {
        res.render('new_release');
    },
    playlist: (req, res) => {
        res.render('playlist');
    },
    artist: (req, res) => {
        res.render('artist');
    },
    
}
module.exports = musicplayer;