import { StateCreator } from "zustand"
import { getCategories, getRecipes, getRecipesById } from "../services/RecipeService"
import { Categories, Drink, Drinks, Recipe, SearchFilters } from "../types"

export type RecipiesSliceType = {
    categories: Categories
    drinks: Drinks
    selectedRecipe: Recipe
    modal: boolean  
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters : SearchFilters) => Promise<void>
    selectRecipe: (drink: Drink['idDrink']) => Promise<void>
    closeModal: () => void
}

export const createRecipesSlice : StateCreator<RecipiesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks:  {
        drinks: []
    },
    modal: false,
    selectedRecipe: {} as Recipe,
    fetchCategories: async  () => { 
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipes: async (filters)  => {
        const drinks = await getRecipes(filters)
        set({
            drinks
        })
    },
    selectRecipe: async(id) => {
        const selectedRecipe = await getRecipesById(id)
        set({
            selectedRecipe,
            modal: true
        })
    },
    closeModal: () => {
        set({
            modal: false,
            selectedRecipe: {} as Recipe
        })
    }
    
})