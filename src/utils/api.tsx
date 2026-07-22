import axios from "axios"

//every request is using this exact url
const api = axios.create({
    baseURL: "https://www.themealdb.com/api/json/v1/1/random.php"
});
//handle too many requests error problem

api.interceptors.request.use(config => {
    console.log("[api] request", config.method, config.url);
    return config;
});

api.interceptors.response.use(
    response => response.data.meals[0],
    error => {
        if (error.response?.status === 429 || error.code === 'ERR_NETWORK') {
            const config = error.config as any;
            config.__retryCount = (config.__retryCount || 0) + 1;
            const MAX_RETRIES = 3;

            console.error("[api] 429 received, retry #", config.__retryCount, error);

            if (config.__retryCount > MAX_RETRIES) {
                console.error("[api] Too many requests. Max retries reached.");
                const fallbackMeal = {
                    strMeal: "Sikertelen",
                    strSource: "#",
                    strMealThumb: "/loading.gif",
                    strCategory: "Unknown",
                } as any;
                return Promise.resolve(fallbackMeal);
            }

            const delay = Math.pow(2, config.__retryCount) * 500; // 1000, 2000, 4000...
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    api.request(config)
                        .then(resolve)
                        .catch(reject);
                }, delay);
            });
        }

        return Promise.reject(error);
    }
);

export default api;
