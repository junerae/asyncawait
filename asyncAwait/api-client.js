var API_KEY = '5aff035ce82c93e3d6d8e91979df9ed1'


async function getData() {
    try {
        let res = await fetch('https://api.themoviedb.org/3/genre/movie/list');
        let movie = await res.json();
    } catch (err) {
        alert(err);
    }

};



