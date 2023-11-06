import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_GSfXKSHP2UXnISyDFjvLdWRrn5ZfA6ENvHObT8LIFgxKDTt3fB6sLewr54hch3Us";
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';

function fetchBreeds() {
    return axios.get('/breeds')
        .then(response => {
            return response.data;
        });
}

function fetchCatByBreed(breedId) {
    return axios.get(`/images/search?breed_ids=${breedId}`)
        .then(response => {
            return response.data[0];
        });
}
export { fetchBreeds, fetchCatByBreed };    