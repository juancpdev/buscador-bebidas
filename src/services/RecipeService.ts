import axios from "axios"
import { categoriesAPIResponseSchema, DrinksAPIResponse } from "../utils/recipes-schema"
import { SearchFilters } from "../types"

export async function getCategories() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const { data } = await axios(url)
    const result = categoriesAPIResponseSchema.safeParse(data)
    if(result.success) {
        return result.data
    }
}

export async function getRecipes(filter: SearchFilters) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${filter.ingredient}&c=${filter.category}`
    const { data } = await axios(url)
    const result = DrinksAPIResponse.safeParse(data)
    if(result.success) {
        return result.data
    }
}