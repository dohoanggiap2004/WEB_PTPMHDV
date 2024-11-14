import axios from "axios";

export const instanceJava = axios.create({
  baseURL: "http://localhost:8080",
  timeout: process.env.REACT_APP_TIMEOUT,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

instanceJava.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response, config } = error;

    if (response.status !== 401) {
      return Promise.reject(error); // Không phải lỗi 401, trả về lỗi bình thường
    }
    // Làm mới token
    try {
      await axios.get("/refresh-token", {
        baseURL: "http://localhost:8000",
        timeout: process.env.REACT_APP_TIMEOUT,
        withCredentials: true,
      });
      return await instanceJava(config);
    } catch {
      console.log(error);
      return await Promise.reject(error);
    }
  }
);

export const instanceNodeJs = axios.create({
    baseURL: "http://localhost:8000",
    timeout: process.env.REACT_APP_TIMEOUT,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

instanceNodeJs.interceptors.response.use(
    (response) => response,
    async (error) => {
        const { response, config } = error;

        if (response.status !== 401) {
            return Promise.reject(error); // Không phải lỗi 401, trả về lỗi bình thường
        }

        // Làm mới token
        try {
            await axios.get("/refresh-token", {
                baseURL: "http://localhost:8000",
                timeout: process.env.REACT_APP_TIMEOUT,
                withCredentials: true,
            });
            return await instanceNodeJs(config);
        } catch {
            console.log(error);
            return await Promise.reject(error);
        }
    }
);


