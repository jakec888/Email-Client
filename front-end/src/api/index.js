import axios from 'axios'

export default axios.create({
  baseURL: 'https://u5la3fxun4.execute-api.us-east-1.amazonaws.com/api',
  responseType: 'json'
})
