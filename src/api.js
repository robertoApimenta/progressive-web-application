const path = 'https://coronavirus-19-api.herokuapp.com/countries';

const headers = {
    method: 'get',
    node: 'cors',
    cache: 'default'
}

function getCountry(country) {
    return fetch(`${path}/${country}`, headers)
        .then((response) => response.json());
}

export default {
    getCountry
}