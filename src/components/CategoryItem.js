import { View, StyleSheet, Text, Image } from "react-native";
import { elevation } from "../common/styles";

const CategoryItem = () => {
  return (
    <View style={[styles.container, styles.elevation]}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/burger.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.itemName}>Burger</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    backgroundColor: "rgb(241,186, 87)",
    borderRadius: 40,
    marginHorizontal: 25,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  elevation,
  image: { width: 35, height: 35 },
  imageContainer: {
    width:50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    marginBottom: 5
  },
  itemName: {
    fontWeight: 700
  }
});
export default CategoryItem;
