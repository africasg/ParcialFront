
import { api } from "./axios"

export const getRandomCocktail = () => {
  return api.get("/random.php")
}