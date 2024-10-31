import { create } from "zustand";
import { createRecipesSlice, RecipiesSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { createFavoriteSlice, FavoritesSliceType } from "./favoriteSlice";

export const useAppStore = create<RecipiesSliceType & FavoritesSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a)
})))