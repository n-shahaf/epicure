
export enum API_METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export enum API_ENDPOINT {
  RESTAURANTS = "/restaurants",
  CHEFS = "/chefs",
  HOME = "/home",
}

export const apiRequest = async (endpoint: string, method: API_METHOD = API_METHOD.GET, options?: RequestInit) => {
  const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3000/api"
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method,
      ...options,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error(`Error during API request to ${endpoint}:`, error)
    throw error
  }
}

export default apiRequest