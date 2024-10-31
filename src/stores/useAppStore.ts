import { create } from "zustand";
import { createRecipesSlice, RecipiesSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { createFavoriteSlice, FavoritesSliceType } from "./favoriteSlice";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";

export const useAppStore = create<RecipiesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a)
})))