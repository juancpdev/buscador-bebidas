import { z } from "zod";
import { categoriesAPIResponseSchema, DrinksAPIResponse, SearchFiltersSchema } from "../utils/recipes-schema";

export type Categories = z.infer<typeof categoriesAPIResponseSchema>

export type SearchFilters = z.infer<typeof SearchFiltersSchema>

export type Drinks = z.infer<typeof DrinksAPIResponse>