import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://weatherapi-com.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  },
})
