import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { elevation } from "../common/styles";

const SearchBar = () => {
  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name="search" size={25} />
      <TextInput placeholder="Restaurant, food" style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    marginTop: 5,
    marginHorizontal: 25,
    backgroundColor: "white",
    borderRadius: 40,
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
  elevation
});
export default SearchBar;
