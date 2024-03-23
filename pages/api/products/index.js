import axios from 'axios';


export default async function Handler(req, res) {

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/authentication',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3M2RiY2RmMmQ4NmI1ZmJiZTQ2M2VjNDE0YjMxMWZlMiIsInN1YiI6IjY1Y2Q1Y2RkMTNhMzg4MDE0YTllMTVhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-waioJci1nbhvOwKLVjhjeIbxS2Lc4mWC0sb7dlo6cA'
        }
    };

    axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
}


