
import { api } from "./axios"

export const getCocktails = () => {
  return api.get("/search.php?s=margarita")
}

export const getCocktailById = (id:number) => {
  return api.get(`/lookup.php?i=${id}`)
}
