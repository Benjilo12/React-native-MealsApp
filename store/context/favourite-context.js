import { createContext, useState } from "react";

export const FavouriteContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavorite: (id) => {},
});

function FavouriteContextProvider({ children }) {
  const [favouriteMealIds, setFavouriteMealsIds] = useState([]);

  //adding new id
  function addFavourite(id) {
    setFavouriteMealsIds((currentFavIds) => [...currentFavIds, id]);
  }

  //function to remove meal from favourite
  function removeFavourite(id) {
    setFavouriteMealsIds((currentsFavIds) =>
      currentsFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favouriteMealIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };
  return (
    <FavouriteContextProvider value={value}>
      {children}
    </FavouriteContextProvider>
  );
}

export default FavouriteContextProvider;
