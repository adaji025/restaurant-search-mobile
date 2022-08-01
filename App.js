import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CategoryItem from "./src/components/CategoryItem";
import Header from "./src/components/Header";
import SearchBar from "./src/components/SearchBar";

export const commonCartegory = [
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
    imageUrl: require("./src/assets/images/steak.png"),
  },
];

export default function App() {
  const [term, setTerm] = useState("burger");

  // setTimeout(() => {
  //   setTerm('pizza')
  // }, 3000)

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar setTerm={setTerm} term={term} />
      <FlatList
        data={commonCartegory}
        renderItem={({ item, index }) => (
          <CategoryItem
            name={item.name}
            imageUrl={item.imageUrl}
            index={index}
            active={item.name === term}
            handlePress={() => setTerm(item.name)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
