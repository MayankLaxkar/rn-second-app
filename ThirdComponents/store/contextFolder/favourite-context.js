import { createContext, useState } from "react";
export const FavouriteContext = createContext({
    id: [],
    addFavourite: (id) => {},
    removeFavourite: (id) => {}
});

function FavouriteContextProvider({children}){
        const [favouriteMealId, setFavouriteMealId] = useState([]);
        function addFavourite(id){
            setFavouriteMealId((currentFavId) => [...currentFavId, id]);
        }
        function removeFavourite(id){
            setFavouriteMealId((currentFavId) => 
            currentFavId.filter((mealId) => mealId !== id))
        }
        const value={
            id : favouriteMealId,
            addFavourite: addFavourite,
            removeFavourite: removeFavourite
        }
    return <FavouriteContext.Provider  value={value}>{children}</FavouriteContext.Provider>

}

export default FavouriteContextProvider;

