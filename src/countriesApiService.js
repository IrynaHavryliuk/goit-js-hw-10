const BASE_URL = "https://restcountries.com/v3.1/";
const FILTER_SEARCH = `?fields=name,capital,population,flags,languages`
const COLLECTION = "name/"

export default class CountriesApiService {
    constructor() {
        this.searchQuery = '';
    }

    fetchCountries() {
        console.log(`${BASE_URL}${COLLECTION}${this.searchQuery}${FILTER_SEARCH}`);
        return fetch(`${BASE_URL}${COLLECTION}${this.searchQuery}${FILTER_SEARCH}`)
            .then(this.onStatusFetch)
    }

    onStatusFetch(response) {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}