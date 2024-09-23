const musicplayer = {
    index: (req, res) => {
        res.render('home',{title: 'MusicPlayer'});
    },
    about: (req, res) => {
        res.render('about',{title: 'MusicPlayer'});
    },
    discography: (req, res) => {
        res.render('discography',{title: 'MusicPlayer'});
    },
    tours: (req, res) => {
        res.render('tours',{title: 'MusicPlayer'});
    },
    videos: (req, res) => {
        res.render('videos',{title: 'MusicPlayer'});
    },
    blog: (req, res) => {
        res.render('blog',{title: 'MusicPlayer'});
    },
    blogdetails: (req, res) => {
        res.render('blogdetails',{title: 'MusicPlayer'});
    },
    contact: (req, res) => {
        res.render('contact',{title: 'MusicPlayer'});
    }
    
};
module.exports = musicplayer;