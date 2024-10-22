import { useEffect, useMemo } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"


export default function Header() {

    const {pathname} = useLocation()

    const isHome = useMemo(() => pathname === '/', [pathname])
    
    const fetchCategories = useAppStore((state) => state.fetchCategories)

    useEffect(() => {
        fetchCategories()
    })
    

    return (
        <header className={isHome ? 'bg-header bg-cover bg-center' : 'bg-slate-800'}>
            <div className="mx-auto container px-5 py-10 md:py-16">
                <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between ">
                    <div>
                        <img className="w-32" src="/logo.svg" alt="Logo" />
                    </div>

                    <nav className="flex gap-8">
                        <NavLink 
                            to={'/'} 
                            className={({isActive}) =>
                                isActive ? 'text-orange-500 font-bold uppercase' : 'text-white font-bold uppercase'
                            }
                        >Inicio</NavLink>

                        <NavLink 
                            to={'/favoritos'} 
                            className={({isActive}) =>
                                isActive ? 'text-orange-500 font-bold uppercase' : 'text-white font-bold uppercase'
                            }
                        >Favoritos</NavLink>
                    </nav>
                </div>

                {isHome && (
                <form className="bg-form opacity-60 hover:opacity-100 transition-all md:w-1/2 2xl:w-1/3 rounded-xl shadow p-9 my-20 space-y-6">
                    <div className="space-y-2">
                        <label 
                            htmlFor="ingredient" 
                            className="text-white uppercase font-bold"
                        >
                            Nombre o Ingredientes:
                        </label>
                        <input
                            id="ingredient"
                            name="ingredient"
                            type="text" 
                            className="rounded-lg w-full p-3 focus:outline-none" 
                            placeholder="Nombre o Ingredientes. Ej. Vodka, Tequila o Cafe" 
                        />
                    </div>
                    <div className="space-y-2">
                        <label 
                            htmlFor="ingredient" 
                            className="text-white uppercase font-bold"
                        >
                            Categorias:
                        </label>
                        <select
                            id="ingredient"
                            name="ingredient"                            
                            className="rounded-lg w-full p-3 focus:outline-none"
                        >
                            <option value="">-- Seleccione --</option>
                        </select>
                    </div>

                    <input 
                        type="submit" 
                        value='Buscar Recetas' 
                        className="cursor-pointer bg-orange-800 hover:bg-orange-900 w-full rounded-lg py-3 text-white uppercase font-bold" 
                    />
                </form>
            )}

            </div>

        </header>
    )
}
