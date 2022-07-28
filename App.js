import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import CategoryItem from "./src/components/CategoryItem";
import Header from "./src/components/Header";
import SearchBar from "./src/components/SearchBar";

export default function App() {
  const commonCartegory = [
    {
      name: "burger",
      imageUrl: require("./src/assets/images/burger.png"),
    },
    {
      name: "pizza",
      imageUrl: require("./src/assets/images/pizza.png"),
    },
    {
      name: "cake",
      imageUrl: require("./src/assets/images/cake.png"),
    },
    {
      name: "dessert",
      imageUrl: require("./src/assets/images/smoothies.png"),
    },
    {
      name: "pasta",
      imageUrl: require("./src/assets/images/pasta.png"),
    },
    {
      name: "steak",
      imageUrl: require("./src/assets/images/steak.png")
    },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <FlatList
        data={commonCartegory}
        renderItem={({ item, index }) => (
          <CategoryItem
            name={item.name}
            imageUrl={item.imageUrl}
            index={index}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.name}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
