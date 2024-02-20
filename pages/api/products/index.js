// import path from "path"
// import fs from "fs"


// // export const config = {
// //     api: {
// //         externalResolver: true,
// //     },
// // }

// const { promisify } = require("util")
// const readFile = promisify(fs.readFile)

// const delay = (ms) => new Promise((resolve) => { setTimeout(resolve, ms) })


// export default async function handler(req, res) {

//     const jsonFile = path.resolve("./", "data.json")
//     try {
//         const readFileData = await readFile(jsonFile)
//         // await delay(1000)
//         const products = JSON.parse(readFileData)
//         if (products) {
//             res.setHeader("Content-Type", "application/json")
//             res.status(200).send(JSON.stringify(products, null, 2))
//             console.log("GET/api/products status: 200");
//         }

//     } catch (e) {
//         console.log("/api/products error", e);
//         res.status(404).send("File Not Found on server")
//     }
// }


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


