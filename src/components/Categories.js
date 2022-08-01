import { FlatList } from "react-native";
import CategoryItem from "./CategoryItem";

const Categories = ({ commonCartegory, setTerm, term}) => {
  return (
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
  );
};

export default Categories;
