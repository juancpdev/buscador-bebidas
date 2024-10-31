import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';
import { useAppStore } from '../stores/useAppStore';
import { Recipe } from '../types';
import { BookmarkIcon } from '@heroicons/react/16/solid';

export default function Modal() {

    const modal = useAppStore((state) => state.modal)
    const closeModal = useAppStore((state) => state.closeModal)
    const selectedRecipe = useAppStore((state) => state.selectedRecipe)
    const handleClickFavorite = useAppStore((state) => state.handleClickFavorite)
    const favorites = useAppStore((state) => state.favorites)
    const isfavorite = favorites.some(favorite => favorite.idDrink === selectedRecipe.idDrink)

    const renderIngredients = () => {
        const ingredients : JSX.Element[] = []
        for(let i = 1; i <= 6;  i++){
            const ingredient  = selectedRecipe[`strIngredient${i}` as keyof Recipe]
            const measure  = selectedRecipe[`strMeasure${i}` as keyof Recipe]
            
            if(ingredient && measure) {
                ingredients.push(
                    <li key={i}>
                        {ingredient} - {measure}
                    </li>
                )
            }
        }
        return ingredients
    }

    return (
        <>
            <Transition appear show={modal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-70" />
                </TransitionChild>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <DialogPanel className="relative transform overflow-hidden rounded-lg bg-gradient-to-tr from-orange-400 to-yellow-100 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-6" >
                            <button
                                onClick={closeModal}
                                className="absolute top-1 right-3 md:top-2 md:right-4 transition-colors"
                            >
                                <p className=" text-3xl text-black hover:text-gray-500" > ×</p>
                            </button>
                            <button
                                className="bg-gradient-to-tr from-orange-500 to-red-500 rounded-b-md w-8 h-10 md:h-12 absolute top-0 left-3 md:right-4 transition-colors cursor-default"
                            >
                                <BookmarkIcon 
                                    className={`size-6 mx-auto text-w cursor-pointer transition-all  ${isfavorite ? ' fill-black' : 'stroke-black fill-none'}`}
                                    onClick={() => handleClickFavorite(selectedRecipe)}
                                ></BookmarkIcon>
                            </button>
                            <DialogTitle as="h3" className="text-gray-900 text-2xl md:text-3xl font-extrabold my-5 text-center">
                                {selectedRecipe.strDrink}
                            </DialogTitle>

                            <img 
                                src={selectedRecipe.strDrinkThumb} 
                                alt={`Imagen de ${selectedRecipe.strDrinkThumb}`} 
                                className=' w-56 md:w-96 mx-auto rounded-lg' 
                            />

                            <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold mt-5 mb-3">
                                Ingredientes y Cantidades
                            </DialogTitle>
                            {renderIngredients()}
                            <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold mt-5 mb-3">
                                Instrucciones
                            </DialogTitle>
                                <p className='text-md'>{selectedRecipe.strInstructions}</p>
                        </DialogPanel>
                    </TransitionChild>
                    </div>
                </div>
                </Dialog>
            </Transition>
        </>
    )
}