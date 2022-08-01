import { View, TextInput, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { elevation } from "../common/styles";
import { useState } from "react";

const SearchBar = ({ setTerm, term }) => {
  const [input, setInput] = useState("");
  const handleEndEditing = () => {
    if (!input) return;
    setTerm(input);
    setInput("");
  };
  // console.log(term);
  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name="search" size={25} />
      <TextInput
        placeholder="Restaurant, food"
        style={styles.input}
        value={input}
        onChangeText={(text) => setInput(text.toLocaleLowerCase())}
        onEndEditing={handleEndEditing}
      />
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
  elevation,
});
export default SearchBar;
