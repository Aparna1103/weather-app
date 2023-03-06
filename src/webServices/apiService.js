import axios from "axios";

const appId = process.env.REACT_APP_ID;
const apiKey = process.env.REACT_APP_KEY;

const getCurrentWeather = async (city) => {

    const options = {
        method: 'GET',
        url: 'https://openweather43.p.rapidapi.com/weather',
        params: {
            q: city,
            appid: appId,
            units: 'metric'
        },
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'openweather43.p.rapidapi.com'
        }
    };

    return axios.request(options)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
            return null;
        });
}

const apiService = {
    getCurrentWeather: getCurrentWeather,
};

export default apiService;
