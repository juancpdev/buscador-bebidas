import { create } from "zustand";
import { createRecipesSlice, RecipiesSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";

export const useAppStore = create<RecipiesSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a)
})))