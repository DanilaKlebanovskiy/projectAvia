import axios from "axios"

const instance = axios.create({
    baseURL: 'https://front-test.beta.aviasales.ru/'}
    )

export const ticketsApi = {
    getSearch() {
        return instance.get('/search')
    },
    getTickets(searchId) {
        return instance.get(`tickets?searchId=${searchId}`)
    }

}



