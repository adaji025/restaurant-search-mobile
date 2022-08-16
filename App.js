import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Categories from "./src/components/Categories";
import CategoryItem from "./src/components/CategoryItem";
import Header from "./src/components/Header";
import Restaurant from "./src/components/Restaurant";
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
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar setTerm={setTerm} term={term} />
      <Categories
        commonCartegory={commonCartegory}
        setTerm={setTerm}
        term={term}
      />
      <Restaurant term={term} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
