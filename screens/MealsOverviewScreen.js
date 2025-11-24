import { StyleSheet, FlatList, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import Mealitem from "../components/Mealitem";

function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;

  // Filter meals by category ID
  // Get meals by category
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  //renderItem
  function renderMealItem(itemData) {
    const item = itemData.item;
    //helper fxn
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };

    return <Mealitem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
