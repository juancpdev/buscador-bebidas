import { Drink } from "../types"

type DrinkCardProp = {
    drink: Drink
}

export default function DrinkCard({drink}: DrinkCardProp) {
  return (
    <div className="border shadow-md text-center rounded-lg">
        <p className="p-3 text-md font-bold">{drink.strDrink}</p>
        <div className=" overflow-hidden">
            <img 
                src={drink.strDrinkThumb} 
                alt={`Imagen de ${drink.strDrink}`}
                className="hover:scale-125 hover:rotate-3 transition-all"
            />
        </div>
        <button
            type="button"
            className="bg-gradient-to-tr from-orange-500 to-yellow-300 text-black w-full font-bold p-3 rounded-b-lg 
            hover:bg-gradient-to-tl hover:from-orange-300 hover:to-yellow-100 transition-all"
        >
            Ver Receta
        </button>
    </div>
   
  )
}
