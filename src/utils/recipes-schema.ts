import z from 'zod'

export const categoriesAPIResponseSchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string()
        })
    )
})

export const SearchFiltersSchema = z.object({
    ingredient: z.string(),
    category: z.string()
})

export const DrinkAPIResponse = z.object({
    idDrink:  z.string(),
    strDrink:  z.string(),
    strDrinkThumb:  z.string(),
})

export const DrinksAPIResponse = z.object({
    drinks: z.array(DrinkAPIResponse)
})