import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"

export default function FavoritesPage() {

  const favorites = useAppStore((state) => state.favorites)

  const hasFavorites = useMemo(() => favorites.length, [favorites])



  return (
    <>
      <h2 className="text-5xl font-bold mb-16 text-center">Favoritos</h2>
        {hasFavorites ? (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10 m-4 md:mx-10 xl:mx-40">
            {favorites.map(favorite => (
              <DrinkCard
                key={favorite.idDrink}
                drink={favorite}
              />
            ))}
          </div>
        ) : 
        <>
          <p className="text-center">Los favoritos se mostrarán aquí.</p>
        </>
        }
    </>
  )
}
