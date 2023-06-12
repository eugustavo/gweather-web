import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://weatherapi-com.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '9273a7c424mshcea6d9f62a44c71p1b5520jsn14a4264190a6',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  },
})
