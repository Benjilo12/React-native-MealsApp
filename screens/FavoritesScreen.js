import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";

import MealsList from "../components/MealsList/MealsList";

import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
// import { FavouriteContext } from "../store/context/favourite-context";

function FavoritesScreen() {
  //used the context to get the favorite meals
  // const favoriteMealsCtx = useContext(FavouriteContext);
  //we get from redux
  const favouriteMealsIds = useSelector((state) => state.favouriteMeals.ids);

  //helps to get only the meals that are marked as favorite
  const favoriteMeals = MEALS.filter((meal) =>
    favouriteMealsIds.includes(meal.id)
  );

  //if no favorite meals, show a message
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
