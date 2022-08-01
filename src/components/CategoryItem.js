import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { elevation } from "../common/styles";

const CategoryItem = ({ name, imageUrl, index, active, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.container,
          styles.elevation,
          index === 0 ? { marginLeft: 25 } : { marginLeft: 15 },
          active
            ? { backgroundColor: "rgb(241, 186, 87)" }
            : { backgroundColor: "white" },
        ]}
      >
        <View style={styles.imageContainer}>
          <Image source={imageUrl} style={styles.image} />
        </View>
        <Text style={styles.itemName}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    backgroundColor: "white",
    borderRadius: 40,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  elevation,
  image: { width: 35, height: 35 },
  imageContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 100,
    marginBottom: 5,
  },
  itemName: {
    fontWeight: '700',
    textTransform: "capitalize",
  },
});
export default CategoryItem;
