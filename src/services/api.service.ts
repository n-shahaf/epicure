import { apiRequest, API_ENDPOINT, API_METHOD } from "@/utils/apiRequest"


export const getHomeData = async () => {
    return apiRequest(API_ENDPOINT.HOME, API_METHOD.GET)
}


export const getRestaurants = async (q: string) => {
    console.log("q", q)
    if (!q) {
        return apiRequest(API_ENDPOINT.RESTAURANTS, API_METHOD.GET)
    }
    return apiRequest(`${API_ENDPOINT.RESTAURANTS}?q=${q}`, API_METHOD.GET)
}


export const getRestaurantById = async (id: string) => {
    return apiRequest(`${API_ENDPOINT.RESTAURANTS}/${id}`, API_METHOD.GET)
}


export const getChefs = async () => {
    return apiRequest(API_ENDPOINT.CHEFS, API_METHOD.GET)
}


export const getChefById = async (id: string) => {
    return apiRequest(`${API_ENDPOINT.CHEFS}/${id}`, API_METHOD.GET)
}



