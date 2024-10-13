import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: process.env.REACT_APP_TIMEOUT,
    // withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
      },
  });

export default instance


