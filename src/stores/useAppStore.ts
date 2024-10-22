import { create } from "zustand";
import { createRecipesSlice, RecipiesSliceType } from "./recipeSlice";

export const useAppStore = create<RecipiesSliceType>( (...a) => ({
    ...createRecipesSlice(...a)
}))