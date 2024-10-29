import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"


export default function IndexPage() {
  
  const drinks = useAppStore((state) => state.drinks)

  const hasDrinks = useMemo(() => drinks.drinks.length, [drinks])

    return (
      <>
        <h2 className="text-5xl font-bold mb-16 text-center">Drinks</h2>
        {hasDrinks ? (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10 m-4 md:mx-10 xl:mx-40">
            {drinks.drinks.map(drink => (
              <DrinkCard
                key={drink.idDrink}
                drink={drink}
              />
            ))}
          </div>
        ) : 
        <>
          <p className="text-center">Completa el formulario para buscar recetas</p>
        </>
        }
      </>
    )
}
