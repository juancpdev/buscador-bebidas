import { useAppStore } from "../stores/useAppStore"
import { Drink } from "../types"

type DrinkCardProp = {
    drink: Drink
}


export default function DrinkCard({drink}: DrinkCardProp) {
  
  const selectRecipe = useAppStore((state) => state.selectRecipe)

  return (
    <div className="flex flex-col h-full text-center rounded-lg bg-gray-100 shadow-card">
      
        <p className="p-3 text-md font-bold line-clamp-2 min-h-[4rem] flex items-center justify-center">
          {drink.strDrink}
        </p>
        
        <div className="flex-grow overflow-hidden">
          <img 
            src={drink.strDrinkThumb} 
            alt={`Imagen de ${drink.strDrink}`}
            className="object-cover w-full h-full hover:scale-125 hover:rotate-3 transition-all"
          />
        </div>
      

      <button
        type="button"
        className="bg-gradient-to-tr from-orange-400 to-yellow-200 text-black w-full font-bold p-3 mt-auto 
        rounded-b-lg hover:bg-gradient-to-tl hover:from-orange-300 hover:to-yellow-100 transition-all"
        onClick={() => selectRecipe(drink.idDrink)}
      >
        Ver Receta
      </button>
    </div>
   
  )
}
