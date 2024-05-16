const axios = require('axios')
const token = localStorage.getItem('token')
const axiosIns = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        "Authorization": `Bearer ${token}`
    }
})

module.exports = {_http: axiosIns}